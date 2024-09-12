import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './components/Checkout';
import useStore from 'shared/shared-store';

const App = () => {
  const { cartItems } = useStore(); // Use shared store

  const handleCheckout = (orderDetails) => {
    console.log('Checkout details:', orderDetails);
    // Example: Checkout logic, e.g., sending order details to a backend service
  };

  console.log('CheckoutService App rendered');
  console.log('Current cart items:', cartItems);

  return (
    <div>
      <h1>Checkout Service</h1>
      <Checkout cartItems={cartItems} onCheckout={handleCheckout} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
