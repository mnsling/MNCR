import React from 'react';
import Modal from 'react-modal';
import close from '../assets/close.png';
import { useCart } from '../components/CartContext';

const CartModal = ({ isVisible, onClose, cart }) => {
  const { removeFromCart } = useCart();

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('₩', '').replace(',', ''));
      return total + price * (item.quantity || 1);
    }, 0).toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' });
  };

  return (
    <Modal
      isOpen={isVisible}
      onRequestClose={onClose}
      className='absolute top-0 right-0 w-96 h-full bg-white z-50'
      overlayClassName='fixed inset-0 bg-black bg-opacity-50 z-50'
    >
      <div className='flex justify-between px-5 py-4 border-b'>
        <h2 className='text-sm font-poppins'>CART</h2>
        <button onClick={onClose}>
          <img src={close} alt="Close" className='w-4' />
        </button>
      </div>
      {cart.length === 0 ? (
        <p className='h-full w-full flex items-center justify-center font-poppins tracking-tighter'>THERE IS NOTHING IN YOUR CART ...</p>
      ) : (
        <ul className='mt-6 mx-5 h-3/4 overflow-y-auto hide-scrollbar'>
          {cart.map((item, index) => (
            <li key={index} className='border rounded-lg h-32 flex gap-3 mb-5'>
              <img src={item.image} alt={item.name} className='w-32 h-full rounded-l-lg' />
              <div className='w-full flex flex-col justify-between'>
                <div className='w-full flex flex-col gap-2'>
                  <div className='font-poppins font-semibold tracking-tighter text-xs mt-4 pr-3 flex w-full justify-between'>
                    <p className='uppercase'>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
                  <h1 className='font-light text-xs'>Quantity: {item.quantity || 1}</h1>
                </div>
                <button onClick={() => removeFromCart(index)} className='w-full font-poppins font-light text-xs flex justify-end px-3 mb-3 underline'>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className='w-full flex flex-col gap-5 px-5 mt-10 pt-6 border-t'>
        <div className='w-full flex justify-between font-poppins'>
          <h1 className='font-semibold text-xs'>Subtotal</h1>
          <h1 className='font-semibold text-xs'>{calculateSubtotal()}</h1>
        </div>
        <button className='font-poppins text-xs text-white bg-black border border-white py-1 rounded-full button hover:bg-transparent hover:text-black hover:border hover:border-black'>CHECKOUT</button>
      </div>
    </Modal>
  );
};

export default CartModal;