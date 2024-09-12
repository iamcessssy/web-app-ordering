import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';

test('renders empty cart message', () => {
  render(<Cart cartItems={[]} removeFromCart={() => {}} />);
  const emptyMessage = screen.getByText(/your cart is empty/i);
  expect(emptyMessage).toBeInTheDocument();
});
