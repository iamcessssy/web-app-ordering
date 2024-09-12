import axios from 'axios';

//const BASE_URL = 'https://dummyjson.com/products'; // Direct URL for frontend testing when backend is not available
 const BASE_URL = 'http://localhost:8080/api/products'; // Backend URL for products

export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    //return response.data.products; // Assuming the API returns an object with a 'products' key
    console.log('API response:', response); // Log the response for debugging
    return response.data; 
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return an empty array in case of an error
  }
};