import React from 'react';
import vid from '../assets/vid2.mp4';
import p1 from '../assets/poster1.jpg'
import p2 from '../assets/poster2.jpg'
import p3 from '../assets/poster3.jpg'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className='h-screen tablet:flex'>
      <Header/>
      <div className='h-5/6 tablet:h-full tablet:w-6/12 desktop:w-7/12'>
        <video autoPlay muted loop className='h-full w-full object-cover'>
          <source src={vid} type='video/mp4' />
        </video>
        <div className='absolute top-0 h-5/6 w-full bg-black bg-opacity-70 flex items-center justify-center tablet:h-full tablet:w-6/12 desktop:w-7/12'>
          <div className='flex flex-col justify-center items-center gap-5 font-poppins'>
            <h1 className='text-white text-4xl text-center font-medium tracking-tighter leading-7'>
              BTS POP-UP :<br />
              <span className='text-5xl'>MONOCHROME</span>
            </h1>
            <div className='flex justify-center items-center'>
              <p className='text-white text-center text-xs w-10/12 font-poppins tracking-tighter leading-5'>"BTS Pop-up: MONOCHROME" is a stylish retail experience for BTS fans, featuring exclusive merchandise and interactive displays with a chic black-and-white theme.</p>
            </div>
            <button className='w-6/12 py-1 border border-white text-xs font-medium font-poppins rounded-full bg-white hover:bg-transparent hover:text-white button'>VIEW EVENTS</button>
          </div>
        </div>
      </div>
      <div className='h-full tablet:w-6/12 tablet:overflow-y-scroll hide-scrollbar desktop:w-5/12'>
        <div className='mt-20 h-4/6 px-5 flex flex-col gap-3'>
          <h1 className='text-xs font-medium'>① NEW ARRIVALS</h1>
          <div className='h-full'>
            <div className='h-4/6 w-full bg-cover bg-center desktop:h-5/6' style={{ backgroundImage: `url(${p1})` }} />
            <div className='flex flex-col gap-5 mt-3 font-poppins'>
              <h1 className='text-3xl leading-7 tracking-tighter'>ARMY<br />🡢 PRIORITY SERVICE</h1>
              <p className='text-sm text-justify tracking-tighter'>"Unlock the ultimate fan experience with ARMY PRIORITY SERVICE! Enjoy exclusive benefits and priority access designed to elevate your love for BTS. Join us as we celebrate your dedication with special perks and unforgettable moments."</p>
            </div>
          </div>
        </div>
        <div className='mt-10 h-4/6 px-5 flex flex-col gap-3 desktop:mt-40'>
          <h1 className='text-xs font-medium'>② FEATURED STYLES</h1>
          <div className='h-full'>
            <div className='h-4/6 w-full bg-cover bg-center' style={{ backgroundImage: `url(${p2})` }} />
            <div className='flex flex-col gap-5 mt-3 font-poppins'>
              <h1 className='text-3xl leading-7 tracking-tighter'>BTS EXCLUSIVE<br />🡢 MNCR MERCH</h1>
              <p className='text-sm text-justify tracking-tighter'>"Unlock the ultimate fan experience with ARMY PRIORITY SERVICE! Enjoy exclusive benefits and priority access designed to elevate your love for BTS. Join us as we celebrate your dedication with special perks and unforgettable moments."</p>
            </div>
          </div>
        </div>
        <div className='mt-10 h-4/6 px-5 flex flex-col gap-3'>
          <h1 className='text-xs font-medium'>② SHIPMENTS</h1>
          <div className='h-full'>
            <div className='h-4/6 w-full bg-cover bg-center' style={{ backgroundImage: `url(${p3})` }} />
            <div className='flex flex-col gap-5 mt-3 font-poppins'>
              <h1 className='text-3xl leading-7 tracking-tighter'>TRACK YOUR<br />🡢 SHIPMENTS</h1>
              <p className='text-sm text-justify tracking-tighter'>"Stay updated on your BTS merchandise shipment! Use our tracking service to follow your order's journey from our warehouse to your doorstep. With real-time updates and notifications, you'll always know where your BTS treasures are. Enjoy peace of mind as you await your exclusive items designed to delight every ARMY."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
