import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="img-container">
        <img
          src={images[index].url}
          alt={images[index].alt}
          className="slider-image"
        />
        <div className="slider-buttons">
          <button className="slider-button prev" onClick={handlePrev}>
            &#9664;
          </button>
          <button className="slider-button next" onClick={handleNext}>
            &#9654;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
