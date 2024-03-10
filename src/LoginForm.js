// LoginForm.js
import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
  login = () => {
    alert('Login button clicked!');
  };

  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <div>
          <label htmlFor="username">
            <span className="tiny-icon"></span>Username
          </label>
          <input type="text" id="username" placeholder="Type your username" />
        </div>
        <div>
          <label htmlFor="password">
            <span className="tiny-icon"></span>Password
          </label>
          <input type="password" id="password" placeholder="Type your password" />
          <div id="forgot-password">Forgot password?</div>
        </div>
        <button onClick={this.login}>Login</button>

        <div className="social-buttons">
          <button className="social-button">Login with Facebook</button>
          <button className="social-button">Login with Instagram</button>
          <button className="social-button">Login with Github</button>
        </div>

        <a href="#" id="signup-link">
          Sign Up
        </a>
      </div>
    );
  }
}

export default LoginForm;