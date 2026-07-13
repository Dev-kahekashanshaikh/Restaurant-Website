import React from "react";
import "../Styles/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Restaurant Info */}
        <div className="footer-box">
          <h2>🍽 Foodie's Paradise</h2>

          <p>
            Experience authentic flavors crafted with love. We serve fresh,
            delicious meals that make every visit memorable.
          </p>

          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>

          <p><FaMapMarkerAlt /> 123 Food Street, New Delhi</p>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <p><FaEnvelope /> info@foodies.com</p>
        </div>

        {/* Opening Hours */}
        <div className="footer-box">
          <h3>Opening Hours</h3>

          <p><FaClock /> Mon - Fri : 9 AM - 10 PM</p>
          <p><FaClock /> Saturday : 10 AM - 11 PM</p>
          <p><FaClock /> Sunday : 10 AM - 9 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Foodie's Paradise. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;