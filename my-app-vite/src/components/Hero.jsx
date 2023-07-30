import React from 'react';
import person from './assets/person.png';
import subtract from './assets/Subtract.png';
import subtract2 from './assets/Subtract-1.png';
import conetenth from './assets/contentH.png';

const MyComponent = () => {
  return (
    <div className='bg-[#152A46] text-white flex items-center font-sans'>
      <img src={conetenth} alt="person" className='w-819 h-546 mr-4 order-1' />
      <div className="text-left ml-12 mb-14">
        <h1 className='text-4xl font-bold'>Jadi expert bersama edspert.id</h1>
        <h2 className='mt-6'>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</h2>
      </div>
    </div>
  );
};

export default MyComponent;
