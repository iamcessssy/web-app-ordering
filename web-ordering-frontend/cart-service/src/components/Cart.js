import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cartItems, removeFromCart }) => {
  console.log('Cart component rendered');
  console.log('Received cart items:', cartItems);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => {
                console.log('Removing item with id:', item.id);
                removeFromCart(item.id);
              }}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;