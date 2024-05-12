import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false);

  const { id, image, category, title, price } = product;

  const handleAddToCart = () => {
    addToCart(product, id);
    setShowNotification(true);

    // Hide the notification after 1 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 1000);
  };

  return (
    <div>
      {showNotification && (
        <div className="bg-pink-500 text-white p-2 mb-2 rounded text-center">
          Added to cart!
        </div>
      )}

      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
            <img
              className='max-h-[160px] group-hover:scale-110 transition duration-250'
              src={image}
              alt='Product Image'
            />
          </div>
        </div>
        <div className='absolute bottom-0 right-4 group-hover:right-0 bg-red-500/40 p-1 flex flex-row items-center justify-center gap-y-2 opacity-0 group hover:opacity-100 transition-all duration-250'>
          <button onClick={handleAddToCart}>
            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500/40'>
              <BsPlus className='text-3xl' />
            </div>
          </button>
        </div>
      </div>

      <div>
        <div className='text-sm capitalize text-gray-500 mb-1'>{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className='font-semibold mb-1'>{title}</h2>
        </Link>
        <div className='font-semibold'> ${price}</div>
      </div>
    </div>
  );
};

export default Product;
