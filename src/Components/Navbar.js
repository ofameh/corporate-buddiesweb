// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">LOGO</div>
      <ul className="navbar-center-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <div className="navbar-login">
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
