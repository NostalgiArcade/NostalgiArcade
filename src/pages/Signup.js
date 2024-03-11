// SignUpForm.js
import React from 'react';
import '../styles/SignUp.css'; // Assume you have similar CSS for SignUp

class SignUpForm extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = this.state;

    // Example validation for passwords match
    if (password !== confirmPassword) {
      console.error("Passwords don't match");
      return;
    }

    // Here you would handle the submission e.g., calling your API
    console.log('Submitting', this.state);

    // Example POST request to your backend (you should handle success/error accordingly)
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Adjust based on your API requirements
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Registration Successful', data);
        // Handle successful registration (e.g., redirect to login page)
      } else {
        console.error('Registration Failed:', data);
        // Handle registration failure (e.g., show error message)
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  render() {
    return (
      <div className="signup-container">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="signupForm">
          <div>
            <label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
            />
          </label>
          <button type="submit" className="submit">Submit</button>
        </form>
        <p className="signin">Already have an account? <a href="index.html">Sign in</a></p>
      </div>
    );
  }
}

export default SignUpForm;
