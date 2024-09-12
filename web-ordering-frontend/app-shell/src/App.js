import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useStore from 'shared/shared-store';

// Lazy load the components
const ProductList = lazy(() => import('product_service/ProductList'));
const Cart = lazy(() => import('cart_service/Cart'));
const Checkout = lazy(() => import('checkout_service/Checkout'));

const App = () => {
  // Get cartItems and functions from the shared store
  const { cartItems, addToCart, removeFromCart } = useStore();

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Define the routes and pass the shared store functions as props */}
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
