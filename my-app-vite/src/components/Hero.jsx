import React from 'react';
import person from './assets/person.png';

const MyComponent = () => {
  return (
    <div className='bg-[#152A46] text-white flex items-center font-sans'>
      <img src={person} alt="person" className='w-819 h-546 mr-4 order-1' />
      <div className="order-2">
        <h1 className='text-4xl font-bold'>Jadi expert bersama edspert.id</h1>
        <h2 className='mt-6'>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</h2>
      </div>
    </div>
  );
};

export default MyComponent;
