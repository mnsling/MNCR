import React from 'react';
import { dropdownData } from './Data';

const SideNav = () => {
    return (
        <div className="h-full w-full block overflow-y-scroll hide-scrollbar">
            {dropdownData.map((section, index) => (
                <div key={index} className='px-10 pt-20 pb-32 flex flex-col gap-5 border-b'>
                    <h1 className='text-sm tracking-tighter'>{section.title}</h1>
                    <button className='text-left text-xs mt-5 hover:underline font-light'>View All</button>
                    <ul className='flex flex-col font-light'>
                        {section.items.map((item, idx) => (
                            <li key={idx} className='text-xs'>
                                <button className='hover:underline w-fit text-left'>{item}</button>
                            </li>
                        ))}
                    </ul>
                    <ul className='flex flex-col font-light mt-5'>
                        <h1 className='mb-5 text-sm tracking-tighter'>② COLLABS</h1>
                        {section.collab.map((collab, idx) => (
                            <li key={idx} className='text-xs'>
                                <button className='hover:underline w-fit text-left'>{collab}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SideNav;
