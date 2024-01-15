import React, { useState, useEffect } from 'react';
import PackCard from './components/PackCard/PackCard.js';
import AdvantagesGrid from './components/AdvantagesGrid/AdvantagesGrid.js';
import Banner from './components/Banner/Banner.js';
import ProcessImage from './components/ProcessImage/ProcessImage.js';
import B2bCreative from './components/B2bCreative/B2bCreative.js';
import Comparison from './components/Comparison/Comparison.js';
import Footer from './components/Footer/Footer.js';
import packs from './data/packs.json';
import './styles.css';

const App = () => {

  const [paymentType, setPaymentType] = useState('annual');
  const [prices, setPrices] = useState({});

  const handlePaymentTypeChange = (type) => { //Function to put the setPaymentType() to annual or monthly. (type) must be a string.
    setPaymentType(type);
  };

  // eslint-disable-next-line
  const updatePrices = (type) => {
    const updatedPrices = {};

    packs.forEach((pack) => {
      if (type === 'monthly' && typeof pack.price === 'number') {
        // Monthly price, without discount
        updatedPrices[pack.title.toLowerCase()] = pack.price;
      } else if (type === 'annual' && typeof pack.price === 'number') {
        // Annual price, with 17% discount
        updatedPrices[pack.title.toLowerCase()] = pack.price * 0.83;
      } else {
        // On b2b we use a string, so we can't make a discount. ('Sin cuota mensual')
        updatedPrices[pack.title.toLowerCase()] = pack.price;
      }
    });

    setPrices(updatedPrices); //Updating prices on view
  };

  useEffect(() => {
    //Force the view to render the prices each time we load the page or by clicking an annual/month button.
    updatePrices(paymentType);
  }, [paymentType, updatePrices]);

  return (
    //Importing the component PackCard with their properties based on the packs array.
    //It will show on the view as many packs as the packs array have.
    //This will check if paymentType is monthly or annual and will give a .active.
    <div className='background-container'>
    <div className="app">
    <Banner />
    <h1>VENTAJAS EXCLUSIVAS DE NUESTROS PACKS</h1>
      <AdvantagesGrid />
      <h1>¿CÓMO FUNCIONA?</h1>
      <ProcessImage />
      <h1 id="packs" className='packsIntroTitle'>ACTIVE EL <b className='underlinedTitle'>PACK MAYORISTA</b> QUE MEJOR SE AJUSTE A SU NEGOCIO</h1>
      <div className="payment-buttons">
        <button
          className={`payment-button ${paymentType === 'monthly' ? 'active' : ''}`}
          onClick={() => handlePaymentTypeChange('monthly')}
        >
          Pago mensual
        </button>
        <button
          className={`payment-button ${paymentType === 'annual' ? 'active' : ''}`}
          onClick={() => handlePaymentTypeChange('annual')}
        >
          Pago anual <br />
          <span style={{ fontSize: `10px` }}>Ahorro 17%</span>
        </button>
      </div>
      <div className="packs-container">
        {packs.map((pack, index) => (
          <PackCard key={index} {...pack} prices={prices} />
        ))}
      </div>
      <B2bCreative />
      <h1>NOS DIFERENCIAMOS A LO GRANDE</h1>
      <Comparison />
      <Footer/>
    </div>
    </div>
  );
};

export default App;