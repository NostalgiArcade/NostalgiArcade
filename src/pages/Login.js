// // LoginForm.js
// import React from "react";
// import "../styles/Login.css";

// class Login extends React.Component {
//   login = () => {
//     alert("Login button clicked!");
//   };

//   render() {
//     return (
//       <div className="login-container">
//         <h1>Login</h1>
//         <div>
//           <label htmlFor="username">
//             <span className="tiny-icon"></span>Username
//           </label>
//           <input type="text" id="username" placeholder="Type your username" />
//         </div>
//         <div>
//           <label htmlFor="password">
//             <span className="tiny-icon"></span>Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             placeholder="Type your password"
//           />
//           <div id="forgot-password">Forgot password?</div>
//         </div>
//         <button onClick={this.login}>Login</button>

//         <div className="social-buttons">
//           <button className="social-button">Login with Facebook</button>
//           <button className="social-button">Login with Instagram</button>
//           <button className="social-button">Login with Github</button>
//         </div>

//         <a href="#" id="signup-link">
//           Sign Up
//         </a>
//       </div>
//     );
//   }
// }

// export default Login;
// LoginForm.js
import React from 'react';
import '../styles/Login.css';

// class LoginForm extends React.Component {
//   login = () => {
//     alert('Login button clicked!');
//   };

class LoginForm extends React.Component {
  state = {
    email: '',
    password: '',
  };

  login = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

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
        console.log(data.message + ' Login Successful');
        // Handle login success, e.g., redirecting to another page
      } else {
        console.error(data.error + ' Error, not logged in');
        // Handle login failure, e.g., showing an error message
      }
    } catch (error) {
      console.error('An error occurred during login: ', error);
      // Handle error, e.g., showing an error message
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={this.login}>
          <div>
            <label htmlFor="email">
              <span className="tiny-icon"></span>Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Type your email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">
              <span className="tiny-icon"></span>Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Type your password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {/* Remaining component code */}
      </div>
    );
  }
}

export default LoginForm;


//   render() {
//     return (
//       <div className="login-container">
//         <h1>Login</h1>
//         <div>
//           <label htmlFor="username">
//             <span className="tiny-icon"></span>Username
//           </label>
//           <input type="text" id="username" placeholder="Type your username" />
//         </div>
//         <div>
//           <label htmlFor="password">
//             <span className="tiny-icon"></span>Password
//           </label>
//           <input type="password" id="password" placeholder="Type your password" />
//           <div id="forgot-password">Forgot password?</div>
//         </div>
//         <button onClick={this.login}>Login</button>

//         <div className="social-buttons">
//           <button className="social-button">Login with Facebook</button>
//           <button className="social-button">Login with Instagram</button>
//           <button className="social-button">Login with Github</button>
//         </div>

//         <a href="#" id="signup-link">
//           Sign Up
//         </a>
//       </div>
//     );
//   }
// }

// export default LoginForm;