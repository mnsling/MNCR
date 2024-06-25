import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/titleb.png';
import menu from '../assets/menu.png';
import Timeline from './Timeline'
import LoginModal from './LoginModal';
import CartModal from './CartModal'
import { useCart } from './CartContext';
import { dropdownData } from './Data';
import DropdownSection from './Dropdown';
const Header = () => {

    const navigate = useNavigate();
    const { cart } = useCart();

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
    const [isCartModalVisible, setIsCartModalVisible] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const toggleLoginModal = () => {
        setIsLoginModalVisible(!isLoginModalVisible);
    };

    const toggleCartModal = () => {
        setIsCartModalVisible(!isCartModalVisible);
      };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleHome = () => {
        navigate('/MNCR/');
    };

    const handleShop = () => {
        navigate('/shop');
    };

    const handleEvents = () => {
        navigate('/events');
    };

    const handleCloud = () => {
        navigate('/cloud');
    };

    return (
        <div className='fixed w-screen z-50'>
            <div className='flex bg-white items-center justify-between px-10 py-2 text-sm font-poppins font-light border-b z-50'>
                <button className='w-full' onClick={handleHome}><img src={logo} className='w-52' /></button>
                <button><img src={menu} className='w-6 desktop:hidden' onClick={toggleMenu} /></button>
                {menuOpen && (
                    <div className='h-full absolute top-0 left-0 right-0 mt-10 pt-10 bg-white desktop:hidden'>
                        <div className='flex flex-col gap-60 bg-white pb-12'>
                            <div className='flex flex-col'>
                                <button className='py-5 border flex justify-between px-10 hover:bg-black hover:text-white button' onClick={handleShop}>
                                    <h1 className='text-3xl text-left tracking-tighter'>SHOP</h1>
                                    <h1 className='text-3xl'>🡢</h1>
                                </button>
                                <button className='py-5 border flex justify-between px-10 hover:bg-black hover:text-white button' onClick={handleEvents}>
                                    <h1 className='text-3xl text-left tracking-tighter'>EVENTS</h1>
                                    <h1 className='text-3xl'>🡢</h1>
                                </button>
                                <button className='py-5 border flex justify-between px-10 hover:bg-black hover:text-white button' onClick={handleCloud}>
                                    <h1 className='text-3xl text-left tracking-tighter'>MEMORY CLOUD</h1>
                                    <h1 className='text-3xl'>🡢</h1>
                                </button>
                            </div>
                            <div className='flex flex-col gap-20'>
                                <div className='flex flex-col'>
                                    <button className='py-5 border flex justify-between px-10 hover:bg-black hover:text-white button' onClick={toggleLoginModal}>
                                        <h1 className='text-3xl text-left tracking-tighter'>LOGIN</h1>
                                        <h1 className='text-3xl'>🡢</h1>
                                    </button>
                                    <LoginModal isVisible={isLoginModalVisible} onClose={toggleLoginModal} />
                                    <button className='py-5 border flex justify-between px-10 hover:bg-black hover:text-white button' onClick={toggleCartModal}>
                                        <h1 className='text-3xl text-left tracking-tighter'>CART</h1>
                                        <h1 className='text-3xl'>🡢</h1>
                                    </button>
                                    <CartModal isVisible={isCartModalVisible} onClose={toggleCartModal} cart={cart} />
                                </div>
                                <Timeline className='px-10 pb-20 items-end' />
                            </div>
                        </div>
                    </div>
                )}
                <div className='w-full hidden desktop:flex justify-center gap-5'>
                    <button onClick={toggleDropdown}>SHOP</button>
                    {isDropdownVisible && (
                        <div className='fixed flex h-1/2 top-10 left-0 mt-1 border-b w-screen z-30'>
                            {dropdownData.map(section => (
                                <DropdownSection
                                    key={section.title}
                                    title={section.title}
                                    items={section.items}
                                    bgColor={section.bgColor}
                                    navigate={navigate}
                                />
                            ))}
                        </div>
                    )}
                    <button onClick={handleEvents}>EVENTS</button>
                    <button onClick={handleCloud}>MEMORY CLOUD</button>
                </div>
                <div className='w-full hidden desktop:flex justify-end gap-5'>
                    <button onClick={toggleLoginModal}>LOGIN</button>
                    <LoginModal isVisible={isLoginModalVisible} onClose={toggleLoginModal} />
                    <button onClick={toggleCartModal}>CART</button>
                    <CartModal isVisible={isCartModalVisible} onClose={toggleCartModal} cart={cart} />
                </div>
            </div>
        </div>
    );
};

export default Header;
