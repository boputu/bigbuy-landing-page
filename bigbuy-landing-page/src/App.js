import React, { useState, useEffect } from 'react';
import PackCard from './components/PackCard'; //importing the component used for every pack.
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

    //Custom data for the packs
    const packs = [
      {
        title: 'Marketplace',
        description: 'Para clientes que quieren vender en marketplaces o ecommerce',
        price: 119.00,
        features: ['EJEMPLO 1', 'EJEMPLO 2', 'EJEMPLO 3', 'EJEMPLO 4', 'EJEMPLO 5', 'EJEMPLO 6', 'EJEMPLO 7', 'EJEMPLO 8', 'EJEMPLO 9'],
        ctaText: 'Personaliza tu Experiencia',
        image: 'marketplace.jpg',
      },
      {
        title: 'Ecommerce',
        description: 'Para clientes que quieren vender en ecommerce',
        price: 89.00,
        features: ['EJEMPLO 1', 'EJEMPLO 2', 'EJEMPLO 3', 'EJEMPLO 4', 'EJEMPLO 5', 'EJEMPLO 6', 'EJEMPLO 7', 'EJEMPLO 8', 'EJEMPLO 9'],
        ctaText: 'Personaliza tu Experiencia',
        image: 'ecommerce.jpg',
      },
      {
        title: 'B2B',
        description: 'Para clientes que quieren iniciarse en el dropshipping o realizar compras al por mayor',
        price: 'Sin cuota mensual',
        features: ['EJEMPLO 1', 'EJEMPLO 2', 'EJEMPLO 3', 'EJEMPLO 4', 'EJEMPLO 5', 'EJEMPLO 6', 'EJEMPLO 7', 'EJEMPLO 8', 'EJEMPLO 9'],
        ctaText: 'Personaliza tu Experiencia',
        image: 'b2b.jpg',
      },
    ];

  return (
    //Importing the component PackCard with their properties based on the packs array.
    //It will show on the view as many packs as the packs array have.
    //This will check if paymentType is monthly or annual and will give a .active.
    <div className="app">
      <h1>Active el pack mayorista que mejor se ajuste a su negocio</h1>
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
    </div>
  );
};

export default App;