// src/components/FeaturesSection.js
import React from "react";
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section" id="features">
      <h2>Why Choose Us?</h2>
      <div className="features-container">
        <div className="feature-box">
          <h3>High Performance</h3>
          <p>Our cars are engineered for speed and efficiency, providing you with the ultimate driving experience.</p>
        </div>
        <div className="feature-box">
          <h3>Advanced Technology</h3>
          <p>Stay connected with the latest in-car technology, including a state-of-the-art infotainment system.</p>
        </div>
        <div className="feature-box">
          <h3>Safety First</h3>
          <p>Your safety is our priority. Our cars are equipped with top-tier safety features to protect you and your loved ones.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
