import React from "react";

const HeroImage = () => {
  return (
    <>
      <div className="hero-section">
        <div className="image-div">
            <img
              className="image-hero"
              src="./assets/1.webp"
              alt="Park2jet Image in hero section"
            />
          <div className="center">
            <div className="info-on-image">
              <p className="info-text-image">
                Affordable Parking at Denver International Airport (DIA)
              </p>
            </div>
          </div>
          <div className="left-bottom">
            <button className="btn reserve-btn btn-large btn-danger">
              Reserve Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroImage;
