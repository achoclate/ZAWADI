import React, { useState, useEffect } from 'react';
import { RiHomeSmileFill } from 'react-icons/ri';
import { BsShopWindow } from 'react-icons/bs';
import { PiPhoneCallFill } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    const Menus = [
        { name: 'Home', icon: RiHomeSmileFill, dis: 'translate-x-0' },
        { name: 'Shop', icon: BsShopWindow, dis: 'translate-x-16' },
        { name: 'Contact', icon: PiPhoneCallFill, dis: 'translate-x-32' },
        { name: 'Login', icon: CgProfile, dis: 'translate-x-48' },
    ];

    const [isActive, setIsActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1); // Initialize to -1 to indicate no item is activated

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
        return () => {
            window.removeEventListener('scroll', () => {});
        };
    }, []);

    const handleMenuClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className={`${isActive ? 'bg-red-300' : 'bg-blue-300'} fixed top-[40px] w-full rounded-t-xl z-10 transition-all`}>
            <ul className='flex justify-center relative'>
                {Menus.map((menu, i) => (
                    <li key={i} className='w-16'>
                        <a
                            className='flex flex-col items-center justify-center text-center pt-6 cursor-pointer'
                            onClick={() => handleMenuClick(i)}
                        >
                            <span className={`text-xl cursor-pointer duration-500 ${activeIndex === i && '-mt-6 text-pink-600'}`}>
                                {React.createElement(menu.icon, { size: '1.5em', className: 'text-current' })}
                            </span>
                            <span className={`transition-all duration-300 ${activeIndex === i ? 'opacity-100 translate-y-2' : 'opacity-0'}`}>
                                {menu.name}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
