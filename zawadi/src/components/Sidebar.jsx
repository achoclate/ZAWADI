import React, { useContext } from 'react'; 
import { Link } from 'react-router-dom';
import { IoArrowForwardCircle } from "react-icons/io5"; 
import { TbTrashOff } from "react-icons/tb";
import CartItem from './CartItems'; 

import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

const Sidebar = () => {
const { isOpen, handleClose } = useContext(SidebarContext); 
const {cart, clearCart, total} = useContext(CartContext);
  return (
    <div
      className={`${
        isOpen ? 'right-0' : '-right-full' 
      }
      w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw]transition-all duration-250 z-20 px-4 lg:px-[35px]`}>
    
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Shopping Cart(0)</div>

        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
        <IoArrowForwardCircle className='text-2xl'/>
        </div>
      </div>
      <div className='bg-pink-100 flex flex-col gap-y-2 '>
        {cart.map((item) => {
        return <CartItem item={item} key={item.id}/>

      })}
      </div>
<div className='flex flex-col gap-y-3 py-4 mt-4'>
  <div className='flex w-full justify-between items-center'>
    <div className='uppercase font-semibold'>
      <span className='mr-2'>Total:</span>$ {parseFloat(total).toFixed(2)}
    </div>
    <div onClick={clearCart} className='cursor-pointer py-4 bg-pink-600 text-white w-12 h-12 flex justify-center items-center text-xl'> 
    <TbTrashOff />
    </div>
  </div>
</div>
    </div>
  );
};

export default Sidebar;
