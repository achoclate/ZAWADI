import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose, IoMdRemove } from 'react-icons/io';

const CartItem = ({item}) => {
  const {id,title,price,image,amount} = item;
  return <div className='flex'>
    <div className='w-full min-h-[150px] flex items-center gap-x-4'>
      <Link to= {'/product/${id}'}>
        <img className='max-w-[80px]' src = {image} alt="" />
      </Link>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2 '>

          <Link to={'/product/${id}'} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>{title}</Link>
        <div className='text-xl cursor-pointer'>
          <IoMdClose className='text-gray-500 hover:text-pink-500 transition'/>
        </div>
        <div className='bg-pink-800 flex gap-x-2 h-[36px] text-sm'>
          <div className=''>
              <IoMdRemove/>
              
          </div>
          <div className=''>quantity</div>
          <div>item price</div>
          <div>final price</div>
        </div>
        </div>
      </div>
    </div>
  </div>;
};

export default CartItem;