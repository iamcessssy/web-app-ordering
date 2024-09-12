import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchProducts } from '../services/ProductService';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      try {
        console.log('Fetching products...');
        const fetchedProducts = await fetchProducts();
        console.log('Products fetched:', fetchedProducts);
        setProducts(fetchedProducts); // Directly set the fetched products
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setProducts([]); // Set to empty array on error
      }
    };

    getProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log('Filtered products:', filteredProducts);

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={searchTerm} 
        onChange={(e) => {
          console.log('Search term changed:', e.target.value);
          setSearchTerm(e.target.value);
        }} 
      />
      <div>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => {
                console.log('Adding product to cart:', product);
                addToCart(product);
              }}>Add to Cart</button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
