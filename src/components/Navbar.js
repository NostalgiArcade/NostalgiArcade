import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left_nav">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="right_nav">
        <Link to="/"> Home </Link>
        <Link to="/Games"> Games </Link>
        <Link to="/About"> About Us </Link>
      </div>
      <div className="login_nav">
        <Link to="/login"> Login </Link>
      </div>
    </div>
  );
}

export default Navbar;
