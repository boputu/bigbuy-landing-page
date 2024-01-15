import React from 'react';
import './B2bCreative.css';
import B2bCreativeImg from '../../images/b2bcreative.jpg';

const B2bCreative = () => {
  return (
    <div className="b2b-creative-banner">
      <img src={B2bCreativeImg} alt='Datos B2B' className="full-width-image" />
    </div>
  );
};

export default B2bCreative;