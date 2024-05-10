import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Logo from '../image/logo.jpeg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header className={`${isActive ? 'bg-blue-300' : 'bg-red-300'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/shop'}>
          <div>
            <img className='w-[40px]' src={Logo} alt=''/>
          </div>
        </Link>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
          <TiShoppingCart className='text-2xl'/>
          <div className='bg-red-300 absolute -left-2 -bottom-2 text-[12px] w-[18px] h-[18px]text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
