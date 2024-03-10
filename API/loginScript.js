document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const loginForm = document.getElementById('loginForm');

    console.log(loginForm); // Add this line

    if (!loginForm) {
        console.error("Error: Login form element not found.");
        return;
    }

    loginForm.style.display = 'none';

    let closeButton; // Declare closeButton outside the event listener to keep track of it

    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevents the default behavior of the button

        if (loginForm.style.display === 'block') {
            loginForm.style.display = 'none';
            document.body.style.overflow = 'auto';
            // Check if closeButton is a child before trying to remove it
            if (closeButton && closeButton.parentNode === loginForm) {
                loginForm.removeChild(closeButton);
            }
        } else {
            loginForm.style.display = 'block';
            document.body.style.overflow = 'hidden';
            // Check if closeButton is already appended before trying to append it again
            if (!closeButton) {
                closeButton = document.createElement('span');
                closeButton.innerHTML = '&times;';
                closeButton.classList.add('close-button');
            }
            loginForm.appendChild(closeButton);

            closeButton.addEventListener('click', function () {
                loginForm.style.display = 'none';
                document.body.style.overflow = 'auto';
                // Check if closeButton is a child before trying to remove it
                if (closeButton.parentNode === loginForm) {
                    loginForm.removeChild(closeButton);
                }
            });
        }
});

const emailInputLogin = document.getElementById('emailInputLogin');
const passwordInputLogin = document.getElementById('passwordInputLogin');

emailInputLogin.addEventListener('input', () => {
    validateEmail();
});

passwordInputLogin.addEventListener('input', () => {
    validatePassword();
});


loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = emailInputLogin.value;
    const password = passwordInputLogin.value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        
        const data = await response.json();

        if(response.ok){
            console.log(data.message + 'Login Successful')
        } else {
            console.error(data.error + 'Error, not logged in');
        }
    } catch (error) {
        console.error('Ah error occurred during login: ', error);
    }
});

function validateEmail(){
    const email = emailInputLogin.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(email)){
        emailInputLogin.classList.remove('invalid');
        emailInputLogin.classList.add('valid');
    } else {
        emailInputLogin.classList.remove('valid');
        emailInputLogin.classList.add('invalid');
    }
}

var passwordLength = 6;

function validatePassword(){
    const password = passwordInputLogin.value;

    if(password.length >= passwordLength){
        passwordInputLogin.classList.remove('invalid');
        passwordInputLogin.classList.add('valid');
    } else {
        passwordInputLogin.classList.remove('valid');
        passwordInputLogin.classList.add('invalid');
    }
}
});