import React from 'react';
import { ReactComponent as Photo1 } from '../Assets/Photo1.svg';
import { ReactComponent as Down } from '../Assets/Down.svg';

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center m-4'>
      <div className='text-center md:text-left md:ml-6 md:mr-6 mt-6 md:mt-0'>
        <h1 className='font-Sora text-2xl md:text-3xl lg:text-4xl'>
          <span className='font-normal'>Hello I’m </span>
          <span className='font-extrabold'>Seif Islem Benrabah.</span><br />
          <span className='font-extrabold'>Motion Graphics </span> 
          <span className='text-shadow text-white'>Designer</span><br />
          <span className='font-extrabold'>and Frontend </span>
          <span className='text-shadow text-white'>Developer</span><br />
          <span>Based In </span>
          <span className='font-extrabold'>Algeria.</span>
        </h1>
        <a 
          className='font-Sora font-normal text-lg md:text-xl bg-black text-white p-2 rounded-md mt-4 inline-flex items-center justify-center'
          href='/public/BENRABAHSEIFISLEM.pdf'
          download="BENRABAHSEIFISLEM.pdf"
        >
          <Down className='w-6 h-6 md:w-8 md:h-8' />
          <span className='ml-2'>Resume</span>
        </a>
      </div>
      <div className='w-4/5 md:w-3/5'>
        <Photo1 className='w-full' />
      </div>
    </div>
  );
};

export default Banner;
