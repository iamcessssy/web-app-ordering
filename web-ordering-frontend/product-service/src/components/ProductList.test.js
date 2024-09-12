import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ProductList from './ProductList';
import { fetchProducts } from '../services/ProductService'; // Mock this service

// Mock the ProductService
jest.mock('../services/ProductService');

const mockProducts = [
  { id: 1, title: 'Product 1', description: 'Description 1', price: 100.0 },
  { id: 2, title: 'Product 2', description: 'Description 2', price: 150.0 },
];

describe('ProductList Component', () => {
  beforeEach(() => {
    // Mock fetchProducts to resolve with mock products
    fetchProducts.mockResolvedValue(mockProducts);
  });

  test('renders product list', async () => {
    // Render the component
    render(<ProductList addToCart={jest.fn()} />);

    // Wait for the products to be displayed
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });
  });

  test('filters products based on search term', async () => {
    render(<ProductList addToCart={jest.fn()} />);

    // Wait for the products to be displayed
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
      expect(screen.getByText('Product 2')).toBeInTheDocument();
    });

    // Search for 'Product 1'
    fireEvent.change(screen.getByPlaceholderText('Search products...'), {
      target: { value: 'Product 1' },
    });

    // Ensure only 'Product 1' is shown
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
  });

  test('calls addToCart when the button is clicked', async () => {
    const mockAddToCart = jest.fn();
    render(<ProductList addToCart={mockAddToCart} />);

    // Wait for the products to be displayed
    await waitFor(() => {
      expect(screen.getByText('Product 1')).toBeInTheDocument();
    });

    // Click the 'Add to Cart' button
    fireEvent.click(screen.getByText('Add to Cart'));

    // Verify that addToCart was called with the right product
    expect(mockAddToCart).toHaveBeenCalledWith(mockProducts[0]);
  });
});
