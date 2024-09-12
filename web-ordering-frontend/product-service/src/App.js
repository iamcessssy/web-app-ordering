import React from 'react';
import ProductList from './components/ProductList';
import useStore from 'shared/shared-store'; // Ensure this path is correct

const App = () => {
  const { addToCart } = useStore(); // Use shared store

  console.log('ProductService App rendered');

  return (
    <div>
      <h1>Product List Service</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default App;
