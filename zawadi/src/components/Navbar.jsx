import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiHomeSmileFill } from 'react-icons/ri';
import { BsShopWindow } from 'react-icons/bs';
import { PiPhoneCallFill } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { TiShoppingCart } from 'react-icons/ti';
import { FaSearch } from 'react-icons/fa'; // Import FaSearch icon
import Logo from '../image/logo.jpeg';
import { CartContext } from '../context/CartContext';
import { SidebarContext } from '../context/SidebarContext';
import { ProductContext } from '../context/ProductContext'; // Import ProductContext

const Navbar = () => {
    const Menus = [
        { name: 'Home', icon: RiHomeSmileFill, dis: 'translate-x-0', link: '/' },
        { name: 'Shop', icon: BsShopWindow, dis: 'translate-x-16', link: '/shop' },
        { name: 'Contact', icon: PiPhoneCallFill, dis: 'translate-x-32', link: '/contact' },
        { name: 'Login', icon: CgProfile, dis: 'translate-x-48', link: '/login' },
    ];

    const { itemAmount } = useContext(CartContext);
    const { setIsOpen } = useContext(SidebarContext);
    const { products } = useContext(ProductContext); // Get products from ProductContext

    const [isActive, setIsActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [searchQuery, setSearchQuery] = useState(''); // State for search query

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

    const handleCartClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value); // Update search query state
    };

    // Filter products based on search query
    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div
            style={{
                position: 'fixed',
                left: 0,
                width: '100%',
                backgroundColor: '#FED7E2',
                zIndex: 50,
            }}
            className={`${isActive ? 'bg-pink-300' : 'bg-blue-300'} fixed w-full flex items-center justify-between z-10 transition-all px-4 py-2`}
        >
            <Link to={'/shop'}>
                <img className='w-[40px]' src={Logo} alt='' />
            </Link>
            <div className='flex items-center'>
                <input
                    type='text'
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder='Search...'
                    className='px-3 py-1 mr-2 border rounded'
                />
                <FaSearch className='cursor-pointer' /> {/* Search button */}
            </div>
            <ul className='flex'>
                {Menus.map((menu, i) => (
                    <li key={i} className='w-12'>
                        <Link
                            to={menu.link}
                            className='flex flex-col items-center justify-center text-center pt-2 cursor-pointer'
                            onClick={() => handleMenuClick(i)}
                        >
                            <span
                                className={`text-sm cursor-pointer duration-500 ${
                                    activeIndex === i && '-mt-1 text-pink-600'
                                }`}
                            >
                                {React.createElement(menu.icon, { size: '1.5em', className: 'text-current' })}
                            </span>
                            <span
                                className={`transition-all duration-300 ${
                                    activeIndex === i ? 'opacity-100 translate-y-0.5' : 'opacity-0'
                                }`}
                            >
                                {menu.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <button onClick={handleCartClick} className='cursor-pointer flex relative'>
                <TiShoppingCart className='text-2xl' />
                <div className='bg-red-300 absolute -left-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                    {itemAmount}
                </div>
            </button>
        </div>
    );
};

export default Navbar;
