import React, { useState, useRef } from 'react';
import cover from '../assets/bts.jpg'
import Header from '../components/Header'

const Cloud = () => {

    const [message, setMessage] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const maxWords = 500;

    // Create a ref for the last input/textarea element
    const scrollRef = useRef(null);

    const handleMessageChange = (e) => {
        const words = e.target.value.trim().split(/\s+/);
        if (words.length <= maxWords) {
            setMessage(e.target.value);
            setWordCount(words.length);
        } else {
            setMessage(words.slice(0, maxWords).join(' '));
            setWordCount(maxWords);
        }
    };

    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    };

    return (
        <div className='h-screen w-screen overflow-y-scroll hide-scrollbar mobile:flex'>
            <Header />
            <div className='w-full h-4/6 bg-no-repeat bg-center bg-cover mobile:h-full' style={{ backgroundImage: `url(${cover})` }} />
            <div className='h-full mobile:w-10/12 mobile:overflow-y-scroll hide-scrollbar desktop:w-5/12'>
                <div className='h-4/6 flex flex-col gap-20 mobile:h-full'>
                    <div className='h-full pt-20 px-10 bg-gray-50 flex flex-col gap-20 mobile:justify-center'>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl font-poppins tracking-tighter'>🡢 ABOUT</h1>
                            <p className='text-xs font-poppins tracking-tighter leading-5'>The BTS Pop-up Monochromes Memory Cloud Scanner is an immersive experience for BTS fans, blending advanced technology with black-and-white aesthetics. This unique installation features interactive displays showcasing iconic moments from BTS's career, creating a nostalgic yet futuristic atmosphere.<br /><br />Central to the pop-up is the Memory Cloud Scanner, a device that lets fans access a digital archive of BTS memories. By scanning QR codes, visitors can unlock exclusive content like behind-the-scenes footage and rare photos, offering a personalized and engaging experience.<br /><br />ARMYs, share your letters and messages for BTS by submitting your details here or emailing us directly at m.nicklausling@gmail.com</p>
                        </div>
                        <button className='font-poppins tracking-tighter text-xs py-1 rounded-full border border-black w-full bg-black text-white hover:bg-white hover:text-black button' onClick={scrollToBottom}>SEND A MESSAGE</button>
                    </div>
                </div>
                <div className='h-3/6 flex flex-col mt-20 px-10 gap-5'>
                    <div className='flex w-full gap-10 mobile:flex-col mobile:gap-5'>
                        <div className='flex w-full gap-3 items-center pb-1 border-b border-black'>
                            <input type='text' placeholder='FIRST NAME' className='w-full text-xs font-poppins tracking-tighter outline-none' />
                        </div>
                        <div className='flex w-full gap-3 items-center pb-1 border-b border-black'>
                            <input type='text' placeholder='LAST NAME' className='w-full text-xs font-poppins tracking-tighter outline-none' />
                        </div>
                    </div>
                    <div className='flex w-full gap-3 items-center pb-1 border-b border-black'>
                        <input type='email' placeholder='ENTER EMAIL ADDRESS' className='w-full text-xs font-poppins tracking-tighter outline-none' />
                    </div>
                    <div className='flex w-full gap-3 items-center pb-1 border-b border-black'>
                        <input type='text' placeholder='ENTER SUBJECT' className='w-full text-xs font-poppins tracking-tighter outline-none' />
                    </div>
                    <textarea
                        className='text-xs font-poppins tracking-tighter w-full border-b border-black'
                        style={{ outline: 'none', resize: 'none', height: '100px' }}
                        placeholder='YOUR MESSAGE'
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <p className='text-xs font-poppins tracking-tighter text-right'>{wordCount}/{maxWords} words</p>
                    <button ref={scrollRef} className='w-5/12 button1 text-xs text-white font-poppins font-light bg-black border border-black py-1 rounded-full mt-6 hover:text-black hover:bg-white button'>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default Cloud