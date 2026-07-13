import React, { useState } from "react";
import "../Styles/Header.css";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from  "../assets/BrownGoldIllustrativeSimpleLogo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-section">
      <div className="logo">
        <img
        //   src={logo}
          alt="Restaurant Logo"
        />
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