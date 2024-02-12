import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="lef_nav">
        <img src={Logo} />
      </div>
      <div className="righ_nav">
        <link to="/"> Home </link>
        <link to="/catalog"> Catalog </link>
        <link to="/about_us"> About Us </link>
      </div>
    </div>
  );
}

export default Navbar;
