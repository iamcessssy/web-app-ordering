import create from 'zustand';

const useStore = create((set) => ({
  cartItems: [],
  addToCart: (item) => {
    console.log('Adding item to cart:', item);
    set((state) => {
      const updatedCartItems = [...state.cartItems, item];
      console.log('Updated cart items:', updatedCartItems);
      return { cartItems: updatedCartItems };
    });
  },
  removeFromCart: (id) => {
    console.log('Removing item with id:', id);
    set((state) => {
      const updatedCartItems = state.cartItems.filter((item) => item.id !== id);
      console.log('Updated cart items:', updatedCartItems);
      return { cartItems: updatedCartItems };
    });
  },
}));

export default useStore;
