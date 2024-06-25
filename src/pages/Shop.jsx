import React, { useState } from 'react';
import Modal from 'react-modal';
import Sidenav from '../components/Sidenav'
import Header from '../components/Header'
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';
import m5 from '../assets/m5.jpg';
import m6 from '../assets/m6.jpg';
import m7 from '../assets/m7.jpg';
import m8 from '../assets/m8.jpg';
import m9 from '../assets/m9.jpg';
import m10 from '../assets/m10.jpg';
import m11 from '../assets/m11.jpg';
import m12 from '../assets/m12.jpg';
import { useCart } from '../components/CartContext';
import { dropdownData } from '../components/Data';
import DropdownSection from '../components/Dropdown';

const products = [
  { id: 1, name: 'Ring (Silver & Black)', price: '₩ 79,000', image: m1, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 2, name: 'Keyring', price: '₩ 25,000', image: m2, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 3, name: 'Mini Pouch', price: '₩ 28,000', image: m3, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 4, name: 'Candle', price: '₩ 36,000', image: m4, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 5, name: 'Tote Bag', price: '₩ 49,000', image: m5, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 6, name: 'Sticker Set', price: '₩ 16,000', image: m6, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 7, name: 'Bottle', price: '₩ 32,000', image: m7, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 8, name: 'Crewneck Shirt (Black)', price: '₩ 79,000', image: m8, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 9, name: 'Chain Necklace', price: '₩ 30,000', image: m9, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 10, name: 'T-Shirt (White)', price: '₩ 49,000', image: m10, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 11, name: 'Storage Box', price: '₩ 29,000', image: m11, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' },
  { id: 12, name: 'Handcream', price: '₩ 16,000', image: m12, par: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis tortor ac felis fermentum, tincidunt viverra metus euismod.' }
];

const Shop = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for quantity input
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { addToCart } = useCart();

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
    setQuantity(1); // Reset quantity input when modal opens
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedProduct(null);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className='h-screen w-full flex flex-col gap-6'>
      <Header/>
      <div className='h-full tablet:hidden'>
        <button className='fixed w-full flex justify-between mt-10 px-10 py-4 border-b bg-white font-poppins text-xs hover:bg-black hover:text-white button tablet:hidden' onClick={toggleDropdown}>
          <h1>① IN-STORE</h1>
          <h1>FILTER</h1>
        </button>
        <div className='mt-20'>
          {isDropdownVisible && (
            <div className='flex flex-col gap-10'>
              {dropdownData.map(section => (
                <DropdownSection
                  title={section.title}
                  items={section.items}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className='flex overflow-y-scroll hide-scrollbar'>
        <div className='hidden tablet:block'>
          <Sidenav />
        </div>
        <div className='h-full w-full flex flex-col gap-6'>
          <h1 className='font-poppins tracking-tighter text-xs px-10 tablet:mt-20 tablet:text-4xl'>🡢 MONOCHROME EXCLUSIVE</h1>
          <div className='h-5/6 w-full px-10 grid grid-cols- gap-5 overflow-y-scroll hide-scrollbar tablet:grid-cols-2 desktop:grid-cols-3 xl:grid-cols-4'>
            {products.map((product) => (
              <div key={product.id} className='h-full w-full'>
                <button onClick={() => openModal(product)} className='h-full w-full flex flex-col'>
                  <img src={product.image} className='w-full h-5/6 object-cover rounded-md cursor-pointer' alt={product.name} />
                  <div className='text-left font-poppins flex flex-col gap-1 mt-2'>
                    <h1 className='text-xs underline underline-offset-2'>BTS MONOCHROME EVENT</h1>
                    <div className='text-sm'>
                      <h1>{product.name}</h1>
                      <h1 className='text-xs'>{product.price}</h1>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className='w-8/12 h-4/6 flex flex-col gap-5 bg-white border border-gray-300 rounded-xl p-3 mobile:h-2/6 desktop:h-3/6 desktop:w-6/12'
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }
        }}
      >
        <div className='h-full w-full mobile:flex gap-5'>
          <img src={selectedProduct?.image} className='w-full h-4/6 rounded-lg mobile:w-3/6 mobile:h-full' alt={selectedProduct?.name} />
          <div className='flex flex-col mt-5 font-poppins tracking-tighter mobile:w-full'>
            <div className='flex justify-between border-y border-black mobile:border-none mobile:flex-col'>
              <h1 className='text-sm py-2 tracking-tighter mobile:text-lg mobile:font-medium mobile:border-y border-black'>{selectedProduct?.name}</h1>
              <p className='hidden py-5 mobile:flex mobile:text-xs'>{selectedProduct?.par}</p>
              <h1 className='text-sm py-2 pl-4 border-l border-black mobile:text-xs mobile:pl-0 mobile:border-y mobile:border-l-0'>{selectedProduct?.price}</h1>
            </div>
            <div className='flex justify-between text-sm border-b border-black mobile:border-none'>
              <div className='flex w-fit mobile:border-b border-black'>
                <label htmlFor='quantity' className='border-r border-black pr-3 py-2 mobile:text-xs'>Quantity:</label>
                <input
                  type='number'
                  id='quantity'
                  name='quantity'
                  min='1'
                  className='quantity-input px-3 py-1 w-4/12 border-r border-black outline-none mobile:text-xs'
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
              <h1 className='w-6/12 text-right py-2 border-l border-black mobile:hidden'>STS: AVAILABLE</h1>
            </div>
            <div className='flex justify-between gap-3 text-xs mt-5'>
              <button className='bg-black text-white border border-black rounded-full w-full hover:bg-transparent hover:text-black button' onClick={() => { addToCart({ ...selectedProduct, quantity }); closeModal(); }}>ADD TO CART</button>
              <button className='bg-black text-white border border-black rounded-full w-full hover:bg-transparent hover:text-black button' onClick={closeModal}>CLOSE</button>
            </div>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default Shop;