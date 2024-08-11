// src/components/Header.js
import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Mec Benz</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#models">Models</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
