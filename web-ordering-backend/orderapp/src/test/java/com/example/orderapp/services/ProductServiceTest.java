package com.example.orderapp.services;

import com.example.orderapp.models.Product;
import com.example.orderapp.models.ProductResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class ProductServiceTest {

    private ProductService productService;
    private RestTemplate restTemplate;

    @BeforeEach
    public void setUp() {
        restTemplate = Mockito.mock(RestTemplate.class);
        productService = new ProductService(restTemplate);
    }

    @Test
    public void testGetAllProducts() {
        Product product1 = new Product(); // Populate fields
        Product product2 = new Product(); // Populate fields
        ProductResponse productResponse = new ProductResponse();
        productResponse.setProducts(Arrays.asList(product1, product2));
        productResponse.setTotal(2);
        productResponse.setSkip(0);
        productResponse.setLimit(30);

        when(restTemplate.getForObject("https://dummyjson.com/products", ProductResponse.class))
                .thenReturn(productResponse);

        List<Product> products = productService.getAllProducts();
        assertEquals(2, products.size());
        // Additional assertions as needed
    }
}
