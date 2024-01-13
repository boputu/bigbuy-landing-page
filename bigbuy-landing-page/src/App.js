import React from 'react';
import PackCard from './components/PackCard'; //importing the component used for every pack.
import './styles.css';

const App = () => {
  //Custom data for the packs
  const packs = [
    {
      title: 'Marketplace',
      description: 'Para clientes que quieren vender en marketplaces o ecommerce',
      price: '99.99 ejemplo',
      features: ['EJEMPLO 1', 'EJEMPLO 2', 'EJEMPLO 3', 'EJEMPLO 4', 'EJEMPLO 5', 'EJEMPLO 6', 'EJEMPLO 7', 'EJEMPLO 8', 'EJEMPLO 9'],
      ctaText: 'Personaliza tu Experiencia',
    },
    {
      title: 'Ecommerce',
      description: 'Para clientes que quieren vender en ecommerce',
      price: '99.99 ejemplo',
      features: ['EJEMPLO 1', 'EJEMPLO 2', 'EJEMPLO 3', 'EJEMPLO 4', 'EJEMPLO 5', 'EJEMPLO 6', 'EJEMPLO 7', 'EJEMPLO 8', 'EJEMPLO 9'],
      ctaText: 'Personaliza tu Experiencia',
    },
    {
      title: 'B2B',
      description: 'Para clientes que quieren iniciarse en el dropshipping o realizar compras al por mayor',
      price: '99.99 ejemplo',
      features: ['EJEMPLO 1', 'EJEMPLO 2', 'EJEMPLO 3', 'EJEMPLO 4', 'EJEMPLO 5', 'EJEMPLO 6', 'EJEMPLO 7', 'EJEMPLO 8', 'EJEMPLO 9'],
      ctaText: 'Personaliza tu Experiencia',
    },
  ];

  return (
    //Importing the component PackCard with their properties based on the packs array.
    //It will show on the view as many packs as the packs array have.
    <div className="app">
      <h1>Active el pack mayorista que mejor se ajuste a su negocio</h1>
      <div className="packs-container">
        {packs.map((pack, index) => (
          <PackCard key={index} {...pack} />
        ))}
      </div>
    </div>
  );
};

export default App;