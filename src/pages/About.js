import React from "react";
import Services from "../components/aboutus";
import "../styles/About.css";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="about-container">
      <Navbar />
      <div>
        <Services />
      </div>
    </div>
  );
}

export default About;
