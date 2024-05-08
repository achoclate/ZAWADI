import React, {createContext, useState, useEffect} from 'react';

export const CartContext= createContext();

const CartProvider= ({children}) => {
const[cart,SetCart] = useState([]);
const AddToCart=(product,id)=>{
  const newItem = {...product,amount:1}
  const cartItem= cart.find(item=>{
    return item.id === id;
  });
  if (cartItem) {
    const newCart= [...cart].map(item=>{
      if (item.id === id){
        return {...item,amount:cartItem.amount + 1};
      }else {
        return item;
      }
    });
    SetCart(newCart);
  }else {
    SetCart([...Cart, newItem])
  }
  
};
  return <CartContext.Provider value={'this is the cart context'}>{children}</CartContext.Provider>;
};

export default CartProvider;