import React from 'react';
import p1 from '../assets/bts4.png';
import p2 from '../assets/bts1.jpg';
import p3 from '../assets/bts5.jpg';
import p4 from '../assets/bts2.jpg';
import p5 from '../assets/bts3.jpg';
import vid1 from '../assets/vid2.mp4';
import vid2 from '../assets/vid3.mp4';
import vid3 from '../assets/vid4.mp4';

const Updatesgrid = () => {
    const updates = [
        { id: 1, title: 'MNCR LOGISTICS<br />🡢 MEMORY CLOUD', par: "Track Your Shipment<br />🡢 https://mncrlogistics.com<br /><br />#BTS #방탄소년단 <br />#MNCR #MNCR_Logistics", img: p1 },
        { id: 2, title: 'BANGTANTV<br />🡢 OFFICIAL TRAILER', par: "Didn't you forget something?<br /><br />Your order is ready for pick-up<br />🡢 https://mncrlogistics.com<br /><br />#BTS #방탄소년단<br />#MNCR #MNCR_Logistics", img: vid1 },
        { id: 3, title: 'BTS POP-UP:<br />🡢 MONOCHROME', par: "2024. 04. 26. - 05. 12.(11AM - 8PM) (KST)<br />PICK-UP HERE:서울 성동구 성수일로4길 12, AP AGAIN<br /><br />#BTS #방탄소년단 #BTS_POPUP<br />#MONOCHROME #MNCR", img: p2 },
        { id: 4, title: 'BTS MONOCHROME MERCH<br />🡢 CONCEPT FILM', par: "2024. 04. 26 - 2024. 05. 12<br />🡢 서울 성동구 성수일로4길 12, AP AGAIN<br /><br />Weverse Shop<br />Coming Soon<br /><br />#BTS #방탄소년단<br />#MONOCHROME #MNCR", img: vid3 },
        { id: 5, title: 'MNCR LOGISTICS<br />🡢 INSPECTION VIDEO', par: "🡢 CERTIFICATE<br />🡢 MEMBER'S PHOTO<br />🡢 AUTOGRAPH<br /><br />#BTS #방탄소년단<br />#MNCR #MNCR_Logistics", img: vid2 },
        { id: 6, title: 'BTS MONOCHROME<br />🡢 GLOBAL SCHEDULE', par: "🡢 SEOUL: 04/26 - 05/12 <br />🡢 TOKYO: 05/03 - 05/26 <br />🡢 JAKARTA: 05/09 - 06/23 <br />🡢 BANGKOK: 05/10 - 06/23 <br />🡢 LA: 05/16 - 05/27 <br />🡢 MANILA: 05/24 - 06/30<br /><br />#BTS #방탄소년단 #BTS_POPUP<br />#MONOCHROME #MNCR", img: p3 },
    ];

    return (
        <div className='w-full'>
            <div className='grid grid-cols-1 mobile:grid-cols-2 desktop:grid-cols-3 2xl:grid-cols-4 gap-6'>
                {updates.map(update => (
                    <div key={update.id} className='flex flex-col gap-5'>
                        <div className='media-container'>
                            {update.img.endsWith('.mp4') ? (
                                <video className='media-element' src={update.img} autoPlay loop muted />
                            ) : (
                                <div className='media-element' style={{ backgroundImage: `url(${update.img})` }} />
                            )}
                        </div>
                        <div className='flex flex-col gap-5'>
                            <h1 className='text-3xl leading-7 tracking-tighter' dangerouslySetInnerHTML={{ __html: update.title }} />
                            <p className='text-xs' dangerouslySetInnerHTML={{ __html: update.par }} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Updatesgrid;
