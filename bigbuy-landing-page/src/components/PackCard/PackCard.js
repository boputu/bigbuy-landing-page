import React, { useState } from 'react';
import { GiCheckMark } from "react-icons/gi";
import './PackCard.css';

// Importing images
import marketplaceImage from '../../images/marketplace.jpg';
import ecommerceImage from '../../images/ecommerce.jpg';
import b2bImage from '../../images/b2b.jpg';

//This is made beacause the error loading images directly from the relative path, so we check if is the one we want and forces it.
const getImagePath = (imageName) => {
  switch (imageName) {
    case 'marketplace.jpg':
      return marketplaceImage;
    case 'ecommerce.jpg':
      return ecommerceImage;
    case 'b2b.jpg':
      return b2bImage;
    default:
      return null;
  }
};

const PackCard = ({ title, description, price, features, ctaText, image, prices }) => {

    //This function is made because b2b is not a number and we don't want to change the price of b2b after clicking on monthly / annual.
    const formatPrice = (price) => {
        if (typeof price === 'number') {
          return `${price.toFixed(2)}€`;
        } else {
          return price;
        }
      };

  const [showAllFeatures, setShowAllFeatures] = useState(false); //This option handles the "Ver más/menos info." button
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 5); //This options decides how many features its shown (default 5).

  //imagePath saves the exact location of each image (ex: '../images/marketplace.jpg')
  const imagePath = getImagePath(image);

  // Check if the pack is B2B
  const isB2B = title.toLowerCase() === 'b2b';

  return (
    <div className={`pack-card ${isB2B ? 'b2b-pack' : ''}`}>
      {isB2B && <div className="badgePopular">MÁS POPULAR</div>}
      <div className="title-container">
        <div className="background-image" style={{ backgroundImage: `url(${imagePath})` }}>
         <h2 className="image-text">{title}</h2>
        </div>
      </div>
      <p>{description}</p>
      <div className='pricing'>
       <span className="pricingText">{formatPrice(prices[title.toLowerCase()])}</span>
       {title !== 'B2B' && <span> / mes</span>}
      </div>
      <p>Cuota de alta 89,00 €</p>
      <button className='ctaButton'>{ctaText}</button>
      <hr className="vertical-line"></hr>
      <ul> {/* This function scrolls through the list of features */}
        {displayedFeatures.map((feature, index) => (
          <li className="features" key={index}><GiCheckMark fill="#0090ff"/> {feature}</li>
        ))}
      </ul>
      {/* This button has the function to change the setShowAllFeatures() to true or false to know what text to show*/}
      <button onClick={() => setShowAllFeatures(!showAllFeatures)}>
        {showAllFeatures ? 'Ver menos detalles' : 'Ver más detalles'}
      </button>
    </div>
  );
};

export default PackCard;