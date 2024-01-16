import React from 'react';
import './Banner.css';
import { GoPackageDependents } from "react-icons/go";
//Importing the main background image
import bannerImage from '../../images/hero-banner.png';

//Feature to scroll smoothly to the packs sections when clicking the CTA Button.
const Banner = () => {
  const handleScrollToPacks = () => {
    const packsSection = document.getElementById('packs');
    packsSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="hero-banner" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Compra al por mayor o haz dropshipping <br /> y potencia tu negocio en +200 marketplaces BigBuy</h1>
          <button className="cta-button" onClick={handleScrollToPacks}>
            DESCUBRE NUESTROS PACKS <GoPackageDependents className="iconBtn" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;