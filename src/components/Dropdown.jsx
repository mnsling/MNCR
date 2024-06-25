import React from 'react';

const DropdownSection = ({ title, items, bgColor, navigate }) => {
  const handleViewAllClick = () => {
    navigate('/shop', { state: { category: title } });
  };

  return (
    <div className={`w-full flex flex-col gap-10 px-10 pb-32 border-b ${bgColor ? bgColor : ''}`}>
      <h1 className='pt-14 font-medium'>{title}</h1>
      <div className='w-fit flex flex-col gap-5 text-xs'>
        <button className='text-left hover:underline' onClick={handleViewAllClick}>
          View All
        </button>
        <div className='w-fit flex flex-col gap-1'>
          {items.map(item => (
            <button key={item} className='text-left hover:underline'>{item}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownSection;