// src/components/HeroSection.js
import React from "react";
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>Experience the Thrill of Driving</h1>
        <br></br>
        <br>
        </br>
        <p style={{color:"white"}}>Discover our latest models with top-notch features and sleek designs.</p>
        <a href="#models" className="cta-button">Explore Models</a>
      </div>
    </section>
  );
}

export default HeroSection;
