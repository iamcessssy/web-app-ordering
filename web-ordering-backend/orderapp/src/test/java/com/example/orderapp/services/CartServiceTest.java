package com.example.orderapp.services;

import com.example.orderapp.models.CartItem;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class CartServiceTest {

    private CartService cartService;

    @BeforeEach
    void setUp() {
        cartService = new CartService();
    }

    @Test
    void testAddItemToCart() {
        // Arrange: Create a cart item
        CartItem item = new CartItem(1L, "Product 1", 2, 20.0);

        // Act: Add the item to the cart
        cartService.addItemToCart(item);

        // Assert: Verify the cart has the item
        List<CartItem> cartItems = cartService.getCartItems();
        assertEquals(1, cartItems.size());
        assertEquals("Product 1", cartItems.get(0).getProductName());
    }

    @Test
    void testRemoveItemFromCart() {
        // Arrange: Add an item to the cart
        CartItem item = new CartItem(1L, "Product 1", 2, 20.0);
        cartService.addItemToCart(item);

        // Act: Remove the item from the cart
        cartService.removeItemFromCart(1L);

        // Assert: Verify the cart is empty
        List<CartItem> cartItems = cartService.getCartItems();
        assertTrue(cartItems.isEmpty());
    }

    @Test
    void testClearCart() {
        // Arrange: Add multiple items to the cart
        CartItem item1 = new CartItem(1L, "Product 1", 2, 20.0);
        CartItem item2 = new CartItem(2L, "Product 2", 1, 10.0);
        cartService.addItemToCart(item1);
        cartService.addItemToCart(item2);

        // Act: Clear the cart
        cartService.clearCart();

        // Assert: Verify the cart is empty
        List<CartItem> cartItems = cartService.getCartItems();
        assertTrue(cartItems.isEmpty());
    }
}
