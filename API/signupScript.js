document.addEventListener('DOMContentLoaded', function () {

    const emailInputSignup = document.getElementById('emailInputSignup');
    const passwordInputSignup = document.getElementById('passwordInputSignup');
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    const signupForm = document.getElementById('signupForm');
    
    
    emailInputSignup.addEventListener('input', () => {
        validateEmailSignup();
    });
    
    passwordInputSignup.addEventListener('input', () => {
        validatePasswordSignup();
    });
    
    confirmPasswordInput.addEventListener('input', () => {
        validateConfirmPassword();
    });
    
    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
            const email = emailInputSignup.value;
            const password = passwordInputSignup.value;
            const confirmPassword = confirmPasswordInput.value;
    
            if (password !== confirmPassword) {
                console.error('Error: Passwords do not match');
                return;
            }
    
            const userData = {
                email,
                password,
            };
    
            try {
                const response = await fetch('http://localhost:3000/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(userData),
                });
                if (response.ok){
                    console.log('User Registered successfully');
                    // Optionally, redirect to a success page or perform other actions
                } else {
                    const data = await response.json();
                    console.error('Error: ' + data.error);
                }
            } catch (error) {
                console.error('Ah unexpected error occurred', error);
            }
        });
    
        function validateEmailSignup() {
            const emailInputSignup = document.getElementById('emailInputSignup');
            if (emailInputSignup) {
            const email = emailInputSignup.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
            if (emailRegex.test(email)) {
                emailInputSignup.classList.remove('invalid');
                emailInputSignup.classList.add('valid');
            } else {
                emailInputSignup.classList.remove('valid');
                emailInputSignup.classList.add('invalid');
            }
        }
    }
    
        function validatePasswordSignup() {
            var passwordLength = 6;
            const passwordInputSignup = document.getElementById('passwordInputSignup');
            if (passwordInputSignup) {
            const password = passwordInputSignup.value;
    
            if (password.length >= passwordLength) {
                passwordInputSignup.classList.remove('invalid');
                passwordInputSignup.classList.add('valid');
            } else {
                passwordInputSignup.classList.remove('valid');
                passwordInputSignup.classList.add('invalid');
            }
        }
    }
    
        function validateConfirmPassword() {
            const confirmPasswordInput = document.getElementById('confirmPasswordInput');
            const password = passwordInputSignup.value;
            const confirmPassword = confirmPasswordInput.value;
        
            if (password === confirmPassword) {
                confirmPasswordInput.classList.remove('invalid');
                confirmPasswordInput.classList.add('valid');
            } else {
                confirmPasswordInput.classList.remove('valid');
                confirmPasswordInput.classList.add('invalid');
            }
        }
    });