import React, { useState } from "react";
import "../Styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from  "../assets/RestaurantLogo2.jpeg"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-section">
      <div className="logo">
        {/* <img
          src={logo}
          alt="Restaurant Logo"
        /> */}
        <h2 style={{fontFamily:"sans-serif"}}>FOODIES PALACE</h2>
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Menu</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Navbar;