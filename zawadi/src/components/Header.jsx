import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [headerText, setHeaderText] = useState("Great to see you!");

  useEffect(() => {
    const interval = setInterval(() => {
      setHeaderText("A promise of a hassle-free shopping");
      setTimeout(() => {
        setHeaderText("Thank you!");
        setTimeout(() => {
          setHeaderText("Great to see you!");
        }, 2000);
      }, 2000);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: `${isActive ? 'bg-blue-300' : 'bg-pink-100'}`, // Change color based on isActive state
      display: 'flex',
      alignItems: 'center', // Center vertically
      justifyContent: 'center' // Center horizontally
    }} className="fixed w-full z-10 transition-all">
      <div className='container mx-auto flex items-center justify-center h-full'>
        <div className="flex items-center">
          <h1 className="text-pink-600 font-semibold text-lg uppercase">{headerText}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
