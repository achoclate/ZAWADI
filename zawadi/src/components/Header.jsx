import React, { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';
import Logo from '../image/logo.jpeg';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [headerText, setHeaderText] = useState("Great to see you!"); // Initial text
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    // Change header text every 3 seconds
    const interval = setInterval(() => {
      setHeaderText("A promise of hassle-free shopping"); // Second text after 3 seconds
      setTimeout(() => {
        setHeaderText("Thank you!"); // Third text after another 3 seconds
        setTimeout(() => {
          setHeaderText("Great to see you!"); // Repeat the cycle after another 3 seconds
        }, 3000);
      }, 3000);
    }, 9000); // Total interval: 9 seconds (3 seconds for each text)

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);

  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header className={`${isActive ? 'bg-blue-300' : 'bg-red-300'} fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-center h-full'> {/* Adjusted flex and justify-center */}
        <div className="flex items-center">
          <Link to={'/shop'}>
            <img className='w-[40px]' src={Logo} alt=''/>
          </Link>
          <h1 className="text-pink-600 font-semibold text-lg uppercase">{headerText}</h1> {/* Adjusted font size */}
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative'>
          <TiShoppingCart className='text-2xl'/>
          <div className='bg-red-300 absolute -left-2 -bottom-2 text-[12px] w-[18px] h-[18px]text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
