package com.example.orderapp.services;

import com.example.orderapp.models.Product;
import com.example.orderapp.models.ProductResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.List;

@Service
public class ProductService {

    private final RestTemplate restTemplate;

    public ProductService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public List<Product> getAllProducts() {
        String url = "https://dummyjson.com/products";
        ProductResponse response = restTemplate.getForObject(url, ProductResponse.class);
        return response != null ? response.getProducts() : Collections.emptyList();
    }
}
