import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Checkout = ({ cartItems, onCheckout }) => {
    console.log('Checkout component rendered');
    console.log('Received cart items:', cartItems);

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');

    const handleCheckout = () => {
        onCheckout({
            name,
            address,
            contact,
            deliveryDate,
            items: cartItems,
        });
        alert('Checkout successful!');
    };

    return (
        <div>
            <h2>Checkout</h2>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Address: </label>
                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div>
                <label>Contact: </label>
                <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} />
            </div>
            <div>
                <label>Delivery Date: </label>
                <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
            </div>
            <button onClick={handleCheckout}>Place Order</button>
        </div>
    );
};

Checkout.propTypes = {
    cartItems: PropTypes.array.isRequired,
    onCheckout: PropTypes.func.isRequired,
  };

export default Checkout;
