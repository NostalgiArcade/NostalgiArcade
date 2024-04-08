import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left_nav">
        <img src={Logo} alt="Logo" />
        <h3>Nostalgi Arcade</h3>
      </div>
      <div className="right_nav">
        <Link to="/"> Home </Link>
        <Link to="/games"> Games </Link>
        <Link to="/about"> About Us </Link>
        <Link to="/scores"> Scores </Link>
      </div>
      <div className="login_nav">
        <h3>
          <Link to="/login"> Login </Link>
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
