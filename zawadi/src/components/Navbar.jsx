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
        { name: 'Home', icon: RiHomeSmileFill, link: '/' },
        { name: 'Shop', icon: BsShopWindow, link: '/shop' },
        { name: 'Contact', icon: PiPhoneCallFill, link: '/contact' },
        { name: 'Login', icon: CgProfile, link: '/login' },
    ];

    const { itemAmount } = useContext(CartContext);
    const { setIsOpen } = useContext(SidebarContext);
    const { products } = useContext(ProductContext);

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
        <nav className="bg-gray-800 py-4 px-4 md:flex md:items-center md:justify-between">
            <div className="flex items-center justify-between">
                <Link to={'/shop'}>
                    <img className='w-12 md:w-20' src={Logo} alt='' />
                </Link>
                <div className="ml-3 flex items-center">
                    <input
                        type='text'
                        value={searchQuery}
                        onChange={handleSearchChange}
                        placeholder='Search...'
                        className='px-3 py-1 mr-2 border rounded'
                    />
                    <FaSearch className='cursor-pointer' />
                    {/* Dropdown to show search results */}
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
            </div>
            <div className="mt-4 md:mt-0 flex items-center">
                <button onClick={handleCartClick} className='text-white focus:outline-none mr-4'>
                    <TiShoppingCart className='text-2xl' />
                    <div className='bg-red-300 absolute -left-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                        {itemAmount}
                    </div>
                </button>
                <div className="hidden md:block">
                    {Menus.map((menu, i) => (
                        <Link
                            key={i}
                            to={menu.link}
                            className={`text-white mr-4 hover:text-gray-300`}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
