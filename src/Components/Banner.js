import React from 'react';
import { ReactComponent as Photo1 } from '../Assets/Photo1.svg';
import { ReactComponent as Down } from '../Assets/Down.svg';

const Banner = () => {
  return (
    <div className='flex flex-row items-center'>
      <div>
        <h1 className='font-Sora text-3xl ml-20'>
          <span className='font-normal'>Hello I’m </span>
          <span className='font-extrabold'>Seif Islem Benrabah.</span><br />
          <span className='font-extrabold'>Motion Graphics</span> 
          <span className='text-shadow text-white'>Designer</span><br />
          <span className='font-extrabold'>and Frontend </span>
          <span className='text-shadow text-white'>Developer</span><br />
          <span>Based In </span>
          <span className='font-extrabold'>Algeria.</span>
        </h1>
        <a 
          className='font-Sora font-normal text-xl bg-black text-white p-2 rounded-md ml-20 mr-80 mt-3 flex flex-row space-x-2 justify-center items-center'
          href='/public/BENRABAHSEIFISLEM.pdf'
          download="BENRABAHSEIFISLEM.pdf"
        >
          <Down />
          <span>Resume</span>
        </a>
      </div>
      <div className='mr-28 '>
        <Photo1 width='600px' />
      </div>
    </div>
  );
};

export default Banner;
