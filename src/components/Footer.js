import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa"; // Import social media icons
import "../styles/Footer.css"; // Import your footer styles here

function Footer() {
  return (
    <footer className="footer">
      {/* Footer container */}
      <div className="footer-content">
        {/* Content wrapper */}
        <div className="footer-section">
          {/* Social media section */}
          <h2>Follow Us</h2> {/* Title */}
          <div className="social-icons">
            {/* Social media icons */}
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/?lang=en">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/accounts/login/?hl=en">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/en/">
              <FaTiktok />
            </a>
          </div>
        </div>
        <div className="footer-section">
          {/* Contact section */}
          <h2>Contact Us</h2> {/* Title */}
          <ul>
            {/* Contact information */}
            <li>+1 (561) 456-789</li> {/* Phone number */}
            <li>customerservice@nostalgicarcade.com</li> {/* Email */}
          </ul>
          <h2>Subscribe for Updates</h2>
          <form className="subscribe-form">
            <input
              type="email"
              name="email"
              className="text-input"
              placeholder="Enter your email address"
            />
            <button type="submit" className="btn btn-big">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        {/* Bottom section of the footer */}
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.{" "}
        {/* Copyright */}
      </div>
    </footer>
  );
}

export default Footer;
