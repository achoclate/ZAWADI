import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className='bg-blue-200 py-3'>
      <div>
        <p className='text-pink-500 text-center'>A promise of a hassle-free shopping</p>
        <p className='text-primary text-center italic'>
          copyright &copy; Zawadi {currentYear}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
