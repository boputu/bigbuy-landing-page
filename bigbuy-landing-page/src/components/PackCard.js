import React, { useState } from 'react';

const PackCard = ({ title, description, price, features, ctaText }) => {

  const [showAllFeatures, setShowAllFeatures] = useState(false); //This option handles the "Ver más/menos info." button
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 5); //This options decides how many features its shown (default 5).

  return (
    <div className="pack-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
      <button className='ctaButton'>{ctaText}</button>
      <ul> {/* This feature scrolls through the list of features */}
        {displayedFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      {/* This button has the function to change the setShowAllFeatures() to true or false to know what text to show*/}
      <button onClick={() => setShowAllFeatures(!showAllFeatures)}>
        {showAllFeatures ? 'Ver menos info' : 'Ver más info'}
      </button>
    </div>
  );
};

export default PackCard;