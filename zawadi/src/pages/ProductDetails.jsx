import React,{useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContextContext);
  const product = products.find(item=>{
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section className='h-screen flex justify-center items-center'>Not in stock</section>
  };

  const{image,price,title,description,} = product;

  return( 
  <section className='pt-32 pb-12 lg:py-32 h-screen'>
    <div className='container mx-auto'> 
    <div className='flex flex-col lg:flex-row items-center'>
      <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0 bg-pink-100'> 
        <img className='max-w-[200px] lg:max-w-sm' src= {image} alt="" /></div>
    <div className='flex-1 text-center lg:text-right '>
      <h1 className='text-[24px] font-medium mb-2 max-w-[400px] mx-auto'>{title}</h1>
      
      </div> 
    </div>
    </div>
  </section>;
  );
};

export default ProductDetails;