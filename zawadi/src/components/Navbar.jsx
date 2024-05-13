import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiHomeSmileFill } from 'react-icons/ri';
import { BsShopWindow } from 'react-icons/bs';
import { PiPhoneCallFill } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { TiShoppingCart } from 'react-icons/ti';
import { FaSearch } from 'react-icons/fa';
import Logo from '../image/logo.jpeg';
import { CartContext } from '../context/CartContext';
import { SidebarContext } from '../context/SidebarContext';
import { ProductContext } from '../context/ProductContext';

const Navbar = () => {
    const Menus = [
        { name: 'Home', icon: RiHomeSmileFill, dis: 'translate-x-0', link: '/' },
        { name: 'Shop', icon: BsShopWindow, dis: 'translate-x-16', link: '/shop' },
        { name: 'Contact', icon: PiPhoneCallFill, dis: 'translate-x-32', link: '/contact' },
        { name: 'Login', icon: CgProfile, dis: 'translate-x-48', link: '/login' },
    ];

    const { itemAmount } = useContext(CartContext);
    const { setIsOpen } = useContext(SidebarContext);
    const { products } = useContext(ProductContext);

    const [isActive, setIsActive] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false); 

    useEffect(() => {
        setFilteredProducts(
            products.filter(product =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [products, searchQuery]);

    const handleMenuClick = (index) => {
        setActiveIndex(index);
    };

    const handleCartClick = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setShowDropdown(true); 
    };

    const handleClickOutsideDropdown = (e) => {
        if (!e.target.classList.contains('search-dropdown')) {
            setShowDropdown(false); 
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutsideDropdown);
        return () => {
            document.removeEventListener('click', handleClickOutsideDropdown);
        };
    }, []);

    return (
        <div className="relative">
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
                <div className='hidden md:flex items-center relative'>
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder='Search...'
                        className='px-3 py-1 mr-2 border rounded'
                    />
                    <FaSearch className='cursor-pointer' />
                    {showDropdown && (
                        <div className="search-dropdown absolute bg-white mt-2 p-2 shadow-md border rounded w-full left-0 top-full">
                            {filteredProducts.map(product => (
                                <div key={product.id}>{product.title}</div>
                            ))}
                            {filteredProducts.length === 0 && (
                                <div>No products found.</div>
                            )}
                        </div>
                    )}
                </div>
                <button onClick={handleCartClick} className='cursor-pointer flex relative'>
                    <TiShoppingCart className='text-2xl' />
                    <div className='bg-red-300 absolute -left-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                        {itemAmount}
                    </div>
                </button>
                <button onClick={() => setIsActive(!isActive)} className='block md:hidden'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d={isActive ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                        />
                    </svg>
                </button>
            </div>
            <div className={`${isActive ? 'block' : 'hidden'} md:hidden bg-gray-800 py-2 px-4`}>
                {Menus.map((menu, i) => (
                    <Link
                        key={i}
                        to={menu.link}
                        className={`block py-2 text-white text-center ${
                            activeIndex === i ? 'bg-pink-600' : ''
                        }`}
                        onClick={() => handleMenuClick(i)}
                    >
                        {menu.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
