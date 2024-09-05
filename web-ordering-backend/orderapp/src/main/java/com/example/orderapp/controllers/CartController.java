package com.example.orderapp.controllers;

import com.example.orderapp.models.CartItem;
import com.example.orderapp.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public List<CartItem> getCartItems() {
        return cartService.getCartItems();
    }

    @PostMapping("/add")
    public void addItemToCart(@RequestBody CartItem cartItem) {
        cartService.addItemToCart(cartItem);
    }

    @DeleteMapping("/remove/{productId}")
    public void removeItemFromCart(@PathVariable Long productId) {
        cartService.removeItemFromCart(productId);
    }

    @DeleteMapping("/clear")
    public void clearCart() {
        cartService.clearCart();
    }
}
