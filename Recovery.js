import React from 'react';
import './Recovery.css';

class Recovery extends React.Component {
  forgotPassword = () => {
    alert('Forgot password clicked!');
  };

  forgotUsername = () => {
    alert('Forgot username clicked!');
  };

  goToLogin = () => {
    alert('Navigating back to login page...');
    // You can navigate to the login page here using window.location or any other method
  };

  render() {
    return (
      <div className="forgot-credentials-container">
        <h1>Forgot Username or Password</h1>
        <div>
          <p>
            Please enter the email associated with your account. We'll send you
            instructions on how to reset your password or recover your username.
          </p>
          <input type="email" id="email" placeholder="Your Email" />
          <button onClick={this.forgotPassword}>Forgot Password</button>
          <button onClick={this.forgotUsername}>Forgot Username</button>
        </div>
        <a href="#" id="back-to-login-link" onClick={this.goToLogin}>Back to Login</a>
      </div>
    );
  }
}

export default Recovery;
