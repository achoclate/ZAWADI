import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
      const newCart = cart.map(item =>
        item.id === id ? { ...item, amount: cartItem.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
const removeFromCart = (id)=> {
  const newCart = cart.filter(item=>{
    return item.id !== id;
  });
  setCart(newCart);
};

const clearCart = ()=>{
  setCart([]);

};

const increaseAmount = (id)=>{

}
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart,increaseAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
