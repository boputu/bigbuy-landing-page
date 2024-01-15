import React from 'react';
import './ProcessImage.css';
import process from '../../images/process.jpg';

const ProcessImage = () => {
  return (
    <div className="process-image-banner">
      <img src={process} alt='Flujo de BigBuy' className="full-width-image" />
    </div>
  );
};

export default ProcessImage;