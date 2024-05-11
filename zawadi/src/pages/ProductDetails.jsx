import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';
import { FiShoppingCart } from 'react-icons/fi';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  // Find the product by id
  const product = products.find(item => item.id === parseInt(id));

  // If the product is not found or if products are still loading, render a loading or not found message
  if (!product || !products.length) {
    return <section className='h-screen flex justify-center items-center'>Loading...</section>;
  }

  // Destructure product details
  const { image, price, title, description } = product;

  return (
    <section className='py-8 px-4'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-1/2 mb-8 lg:mb-0 lg:pr-8'>
            <img className='w-full rounded-lg max-w-xs' src={image} alt={title} />
          </div>
          <div className='lg:w-1/4'>
            <h1 className='text-2xl font-semibold mb-4'>{title}</h1>
            <div className='text-lg font-semibold mb-4'>${price}</div>
            <p className='text-sm mb-2 mt-2'>{description}</p> {/* Added margin-top */}
            <button onClick={() => addToCart(product, product.id)} className='flex items-center justify-center w-32 bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 text-sm'>
              <FiShoppingCart className='mr-5 text-lg' /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
