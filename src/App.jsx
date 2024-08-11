// src/App.js
import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import ImageGrid from "./components/ImageGrid";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ImageGrid />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

export default App;
