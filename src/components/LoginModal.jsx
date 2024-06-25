import React from 'react';
import app1 from '../assets/app1.png'
import app2 from '../assets/app2.png'
import app3 from '../assets/app3.png'
import exit from '../assets/close.png'


const LoginModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
            <div className='bg-white rounded-lg shadow-md h-2/3 w-11/12 desktop:h-fit desktop:w-6/12'>
                <div className='h-full flex flex-col desktop:h-fit'>
                    <div className='flex items-start justify-between'>
                        <div className='w-full h-full flex justify-between pl-10'>
                            <div className='h-full w-full tablet:w-5/12 pr-5 tablet:border-r desktop:border-none flex flex-col gap-10 desktop:w-fit'>
                                <div className='flex justify-between items-center'>
                                    <h1 className='text-xl font-poppins tracking-tighter mt-5'>CONNECT A WALLET</h1>
                                </div>
                                <div className='flex flex-col gap-4 mb-10'>
                                    <button className='flex items-center gap-3'>
                                        <img src={app1} className='w-10 rounded-lg border' />
                                        <h1 className='text-xs text-left font-poppins font-semibold tracking-tighter'>Gcash Wallet</h1>
                                    </button>
                                    <button className='flex items-center gap-3'>
                                        <img src={app2} className='w-10 rounded-lg border' />
                                        <h1 className='text-xs text-left font-poppins font-semibold tracking-tighter'>Maya Wallet</h1>
                                    </button>
                                    <button className='flex items-center gap-3'>
                                        <img src={app3} className='w-10 rounded-lg border' />
                                        <h1 className='text-xs text-left font-poppins font-semibold tracking-tighter'>Paypal Wallet</h1>
                                    </button>
                                </div>
                            </div>
                            <div className='hidden tablet:block w-9/12 tablet:w-8/12 font-poppins desktop:hidden'>
                                <div className='flex flex-col gap-10 pl-3'>
                                    <h1 className='text-xl font-poppins tracking-tighter mt-5'>WHAT IS A WALLET?</h1>
                                    <div className='flex gap-6'>
                                        <div className='flex flex-col gap-3'>
                                            <h1 className='text-xs font-semibold'>A HOME FOR YOUR DIGITAL ASSETS</h1>
                                            <p className='text-xs'>Self-custody is important. Wallets are changing the way we login, shop and interact with the web.</p>
                                        </div>
                                        <div className='flex flex-col gap-3'>
                                            <h1 className='text-xs font-semibold'>A NEW WAY TO LOGIN</h1>
                                            <p className='text-xs'>Login with a wallet of your choice, the safest ways to login in the digital age.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='desktop:bg-gray-100 flex items-start rounded-r-lg'>
                                <div className='hidden px-10 desktop:flex flex-col gap-10'>
                                    <h1 className='text-xl font-poppins tracking-tighter pt-5'>SIGN IN</h1>
                                    <div className='flex flex-col gap-2'>
                                        <div className='w-full flex gap-5'>
                                            <div className='w-full flex items-center border-b'>
                                                <h1 className='text-xs pb-1'>🡢</h1>
                                                <input className='w-full bg-transparent text-xs font-poppins tracking-tighter px-3 pb-1' style={{ outline: 'none' }} placeholder='FIRST NAME' />
                                            </div>
                                            <div className='w-full flex items-center border-b'>
                                                <h1 className='text-xs pb-1'>🡢</h1>
                                                <input className='w-full bg-transparent text-xs font-poppins tracking-tighter px-3 pb-1' style={{ outline: 'none' }} placeholder='LAST NAME' />
                                            </div>
                                        </div>
                                        <div className='flex items-center border-b'>
                                            <h1 className='text-xs pb-1'>🡢</h1>
                                            <input className='bg-transparent text-xs font-poppins tracking-tighter w-5/6 px-3 pb-1' style={{ outline: 'none' }} placeholder='ENTER YOUR EMAIL ADDRESS' />
                                        </div>
                                        <div className='flex items-center border-b'>
                                            <h1 className='text-xs pb-1'>🡢</h1>
                                            <input className='bg-transparent text-xs font-poppins tracking-tighter w-5/6 px-3 pb-1' style={{ outline: 'none' }} type='password' placeholder='ENTER YOUR PASSWORD' />
                                        </div>
                                    </div>
                                    <button className='w-full border border-black bg-black text-white rounded-full text-sm font-poppins tracking-tighter hover:bg-transparent hover:text-black button'>SIGN UP</button>
                                </div>
                                <button className='m-4' onClick={onClose}><img src={exit} className='w-6' /></button>
                            </div>
                        </div>
                    </div>
                    <div className='h-full px-10 bg-gray-100 rounded-b-lg flex flex-col gap-10 desktop:hidden'>
                        <h1 className='text-xl font-poppins tracking-tighter pt-5'>SIGN IN</h1>
                        <div className='flex flex-col gap-2'>
                            <div className='w-full flex gap-5'>
                                <div className='w-full flex items-center border-b'>
                                    <h1 className='text-xs pb-1'>🡢</h1>
                                    <input className='w-full bg-transparent text-xs font-poppins tracking-tighter px-3 pb-1' style={{ outline: 'none' }} placeholder='FIRST NAME' />
                                </div>
                                <div className='w-full flex items-center border-b'>
                                    <h1 className='text-xs pb-1'>🡢</h1>
                                    <input className='w-full bg-transparent text-xs font-poppins tracking-tighter px-3 pb-1' style={{ outline: 'none' }} placeholder='LAST NAME' />
                                </div>
                            </div>
                            <div className='flex items-center border-b'>
                                <h1 className='text-xs pb-1'>🡢</h1>
                                <input className='bg-transparent text-xs font-poppins tracking-tighter w-5/6 px-3 pb-1' style={{ outline: 'none' }} placeholder='ENTER YOUR EMAIL ADDRESS' />
                            </div>
                            <div className='flex items-center border-b'>
                                <h1 className='text-xs pb-1'>🡢</h1>
                                <input className='bg-transparent text-xs font-poppins tracking-tighter w-5/6 px-3 pb-1' style={{ outline: 'none' }} type='password' placeholder='ENTER YOUR PASSWORD' />
                            </div>
                        </div>
                        <button className='w-full border border-black bg-black text-white rounded-full text-sm font-poppins tracking-tighter hover:bg-transparent hover:text-black button'>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
