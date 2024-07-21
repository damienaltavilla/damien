// src/ConstructionPage.js
import React from 'react';
import './ConstructionPage.css';

const ConstructionPage = () => {
  return (
    <div className="construction-container">
      <div className="animation-container">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
      <h1 className="message">Website in construction</h1>
    </div>
  );
};

export default ConstructionPage;
