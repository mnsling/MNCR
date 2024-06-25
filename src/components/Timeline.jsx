// Timeline.jsx
import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

const locations = [
  { label: 'TYOㅤ', timezone: 'Asia/Tokyo' },
  { label: 'SEOULㅤ', timezone: 'Asia/Seoul' },
];

const Timeline = ({ className }) => {
  const [times, setTimes] = useState({});

  const updateTimes = () => {
    const newTimes = {};
    locations.forEach(location => {
      newTimes[location.label] = moment.tz(location.timezone).format('HH:mm:ss');
    });
    setTimes(newTimes);
  };

  useEffect(() => {
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`flex flex-col items-start ${className}`}>
      {locations.map((location, index) => (
        <div key={index} className='w-fit text-sm font-poppins leading-4 tracking-tighter'>
          {location.label} {times[location.label]}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
