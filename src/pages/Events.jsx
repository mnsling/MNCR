import React, { useState } from 'react';
import vid from '../assets/vid1.mp4';
import eventData from '../components/EventData';
import Updatesgrid from '../components/Updatesgrid';
import Header from '../components/Header'

const Events = () => {
    const [activeButton, setActiveButton] = useState(1);
    const [showEvent, setShowEvent] = useState(true);

    const handleButtonClick = (num) => {
        if (num === activeButton) return;
        setShowEvent(false);
        setTimeout(() => {
            setActiveButton(num);
            setShowEvent(true);
        }, 500);
    };

    const activeEvent = eventData.find(event => event.id === activeButton);

    return (
        <div className='h-screen w-screen overflow-y-auto hide-scrollbar'>
            <Header/>
            <div className='relative h-4/6 w-full'>
                <video autoPlay muted loop className='h-full w-full object-cover'>
                    <source src={vid} type='video/mp4' />
                </video>
                <div className='absolute top-0 left-0 h-full w-full bg-black bg-opacity-70'>
                    <div className='absolute top-0 pt-20 h-full px-10 font-poppins flex flex-col justify-between tablet:hidden'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex text-sm text-white font-medium gap-3'>
                                {eventData.map((event) => (
                                    <button
                                        key={event.id}
                                        className={`px-3 border-r-2 border-white opacity-75 hover:opacity-100 button ${activeButton === event.id ? 'opacity-100' : ''}`}
                                        onClick={() => handleButtonClick(event.id)}
                                    >
                                        {event.id}.
                                    </button>
                                ))}
                            </div>
                            <h1 className='text-5xl text-white tracking-tighter font-medium leading-9 mobile:text-6xl mobile:leading-11'>EVENTS<br />🡢CALENDAR</h1>
                        </div>
                        {activeEvent && (
                            <div className={`event-details ${showEvent ? 'fade-in' : 'fade-out'}`}>
                                <div className='text-left font-light mb-10 text-white flex flex-col gap-5 tablet:hidden'>
                                    <h1 className='text-xs font-medium tracking-tighter mobile:text-base'>{activeEvent.date}</h1>
                                    <div className='flex flex-col gap-2'>
                                        <h1 className='text-3xl tracking-tighter leading-7 mobile:text-5xl mobile:leading-10' dangerouslySetInnerHTML={{ __html: activeEvent.location }}></h1>
                                        <h1 className='text-xs font-medium mobile:text-base'>{activeEvent.venue}</h1>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='hidden h-full w-full tablet:flex flex-col justify-between pb-10 text-white absolute top-0 pt-20 font-poppins px-10'>
                        <h1 className='text-8xl font-medium tracking-tighter leading-12'>EVENTS<br />🡢CALENDAR</h1>
                        <div className='flex gap-10 overflow-x-auto hide-scrollbar 2xl:gap-0'>
                            {eventData.map(event => (
                                <div key={event.id} className='flex-shrink-0 w-4/12 desktop:w-3/12 xl:w-2/12'>
                                    <div className='flex flex-col gap-5 w-full tracking-tighter'>
                                        <h1 className='text-xs font-medium'>{event.date}</h1>
                                        <div className='flex flex-col gap-2'>
                                            <h1 className='text-3xl leading-7 tracking-tighter 2xl:text-4xl 2xl:leading-8' dangerouslySetInnerHTML={{ __html: event.location }} />
                                            <h1 className='text-xs font-medium'>{event.venue}</h1>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-full font-poppins mt-10 px-10'>
                <h1 className='text-3xl tracking-tighter py-10 mobile:text-5xl'>🡢 MEMORY CLOUD</h1>
                <Updatesgrid />
            </div>
        </div>
    );
}

export default Events;
