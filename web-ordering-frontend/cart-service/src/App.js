import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Cart from './components/Cart';
import useStore from 'shared/shared-store';

const App = () => {
  const { cartItems, addToCart, removeFromCart } = useStore(); // Use shared store

  console.log('CartService App rendered');
  console.log('Current cart items:', cartItems);

  // Add a useEffect to log when the component mounts
  useEffect(() => {
    console.log('CartService App mounted');
    console.log('Initial cart items:', cartItems);
  }, []);

  // Add a useEffect to log when cartItems changes
  useEffect(() => {
    console.log('cartItems updated:', cartItems);
  }, [cartItems]);

  return (
    <div>
      <h1>Cart Service</h1>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <button onClick={() => {
        const newItem = { id: Date.now(), title: 'New Item', price: 10 };
        console.log('Adding new item to cart:', newItem);
        addToCart(newItem);
      }}>Add Item</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
