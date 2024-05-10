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
        { name: 'Profile', icon: CgProfile, dis: 'translate-x-48' },
    ]

    const [isActive, setIsActive] = useState(false);
    const [isActivated, setIsActivated] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
        });
        return () => {
            window.removeEventListener('scroll', () => { });
        };
    }, []);

    return (
        <div className={`${isActive ? 'bg-red-300' : 'bg-blue-300'} fixed top-[40px] w-full rounded-t-xl z-10 transition-all`}>
            <ul className='flex relative'>

                <span className='bg-rose-600 border-4 border-gray-900 h-16 h-16 abs'>

                </span>

                {Menus.map((menu, i) => (

                    <li key={i} className='w-16'>

                        <a className='flex flex-col items-center justify-center text-center pt-6 cursor-pointer'
                            onClick={() => setIsActivated(i)}>

                            <span className={`text-xl cursor-pointer duration-500 ${i === isActivated &&'-mt-6'}`}>
                                {React.createElement(menu.icon)}
                            </span>
                            <span className={`text-pink-800 transition-all duration-300 ${isActivated === i ? 'opacity-100 translate-y-2' : 'opacity-50'}`}>
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
