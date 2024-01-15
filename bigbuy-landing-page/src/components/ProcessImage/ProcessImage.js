import React from 'react';
import './ProcessImage.css';
import process from '../../images/process.png';

const ProcessImage = () => {
  return (
    <div className="hero-banner">
      <img src={process} alt='Flujo de BigBuy' className="full-width-image" />
    </div>
  );
};

export default ProcessImage;