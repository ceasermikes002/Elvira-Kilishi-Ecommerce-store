// context.js
import React, { createContext, useContext, useState } from 'react';

// Cart context
const CartContext = createContext();

export const useCart = () => useContext(CartContext);



export const SCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product._id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


// Header context
export const headerContext = createContext();
