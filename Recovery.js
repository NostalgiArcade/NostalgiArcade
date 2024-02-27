// Recovery.js
import React from 'react';
import './recovery.css'; // Import recovery.css instead of styles.css

const Recovery = () => {
  const forgotPassword = () => {
    // Implement your forgot password logic here
    console.log("Forgot Password");
  };

  const forgotUsername = () => {
    // Implement your forgot username logic here
    console.log("Forgot Username");
  };

  const goToLogin = () => {
    // Implement your go to login logic here
    console.log("Go to Login");
  };

  return (
    <div className="forgot-credentials-container">
      <h1>Forgot Username or Password</h1>
      <div>
        <p>
          Please enter the email associated with your account. We'll send you
          instructions on how to reset your password or recover your username.
        </p>
        <input type="email" id="email" placeholder="Your Email" />
        <button onClick={forgotPassword}>Forgot Password</button>
        <button onClick={forgotUsername}>Forgot Username</button>
      </div>
      <a href="#" id="back-to-login-link" onClick={goToLogin}>Back to Login</a>
    </div>
  );
};

export default Recovery;