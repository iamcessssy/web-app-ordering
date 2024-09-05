package com.example.orderapp.services;

import com.example.orderapp.models.CartItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CartService {

    private List<CartItem> cart = new ArrayList<>();

    public List<CartItem> getCartItems() {
        return cart;
    }

    public void addItemToCart(CartItem cartItem) {
        cart.add(cartItem);
    }

    public void removeItemFromCart(Long productId) {
        cart.removeIf(item -> item.getProductId().equals(productId));
    }

    public void clearCart() {
        cart.clear();
    }
}
