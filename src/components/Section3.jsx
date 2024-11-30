import React, { useState } from "react";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState('buyer');

  const buyerFeatures = [
    "Post your requirements.",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on the ratings and reviews."
  ];

  const supplierFeatures = [
    "Complete your profile and get verified.",
    "Select service tax for relavent opportunities.",
    "Reach out buyers and expand your business."
  ];

  return (
    <div className="section3-wrapper">
      <div className="section3-container">
        <div className="section3-content">
          <div className="video-container">
            
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/D7tit_JZKvk?si=Odbjd25vL2acuSRG"
                title="HABOT Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="features-container">
            <div className="user-types">
              <h2 
                className={activeTab === 'buyer' ? 'active' : ''}
                onClick={() => setActiveTab('buyer')}
              >
                Buyer
              </h2>
              <h2 
                className={activeTab === 'supplier' ? 'active' : ''}
                onClick={() => setActiveTab('supplier')}
              >
                Supplier
              </h2>
            </div>
            <div className="features-list">
              {(activeTab === 'buyer' ? buyerFeatures : supplierFeatures).map((feature, index) => (
                <div 
                  key={index} 
                  className="feature-item"
                  style={{"--index": index}}
                >
                  <span className="check-icon">✓</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;