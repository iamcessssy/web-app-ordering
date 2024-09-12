import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkout from './Checkout';

test('renders checkout form', () => {
  render(<Checkout cartItems={[]} onCheckout={() => {}} />);
  const nameInput = screen.getByLabelText(/name/i);
  expect(nameInput).toBeInTheDocument();
});
