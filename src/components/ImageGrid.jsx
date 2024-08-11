// src/components/ImageGrid.js
import React from "react";
import './ImageGrid.css';

function ImageGrid() {
   
  const images = [
    "https://images.pexels.com/photos/3778769/pexels-photo-3778769.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/10215508/pexels-photo-10215508.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/12152811/pexels-photo-12152811.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/19746807/pexels-photo-19746807/free-photo-of-steering-wheel-in-mercedes-benz-car.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div>
        <h4 className="text">Gallery</h4>
    <div className="image-grid">
      {images.map((image, index) => (
        <div className="image-item" key={index}>
          <img src={image} alt={`Car ${index + 1}`} />
        </div>
      ))}
    </div>
    </div>
    
  );
}

export default ImageGrid;
