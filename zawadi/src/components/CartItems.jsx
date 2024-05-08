import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';

const CartItem = ({ item }) => {
  const { id, title, price, image, amount } = item;
  return (
    <div className='flex'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt="" />
        </Link>
        <div className='w-full flex flex-col'>
          <div className='flex justify-between mb-2'>
            <Link to={`/product/${id}`} className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            <div className='text-xl cursor-pointer'>
              <IoMdClose className='text-gray-500 hover:text-pink-500 transition'/>
            </div>
          </div>
          <div className='bg-blue-400 flex gap-x-2 h-[36px] text-sm'>
            <div className='flex flex-1 max-w-[100px] bd-purple-500 items-center h-full border text-primary font-medium'>
              <div className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdAdd/>
              </div>
              <div className='h-full flex justify-center items-center px-2'>{amount}</div>
              <div className='flex-1'>
                <IoMdRemove/>
              </div>
            </div>
            <div>Quantity</div>
            <div>Item Price</div>
            <div>Final Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
