import React, {createContext, useState, useEffect} from 'react';

export const CartContext= createContext();

const CartProvider= ({children}) => {
const[cart,SetCart] = useState([]);
const AddToCart=()=>{
  console.log('added to cart')
}
  return <CartContext.Provider value={'this is the cart context'}>{children}</CartContext.Provider>;
};

export default CartProvider;