import React from "react";
import rightArrow from '../img/OpenmojiRightArrow.svg';


const Section2 = () => {
  const locations = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain"
  ];

  return (
    <div className="section2-container">
      <div className="section2-content">
        <div className="section2-text">
          <h1>Ready to dive into <span className="highlight">HABOT</span>?</h1>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant community
            of like-minded individuals, unlock valuable resources, and take the first
            step towards realizing your entrepreneurial dreams.
          </p>
          <button className="signup-button">
            Sign up Today ! <span className="arrow">→</span>
          </button>
        </div>
        <div className="locations-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-card">
              {location} <img src={rightArrow} alt="arrow" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
