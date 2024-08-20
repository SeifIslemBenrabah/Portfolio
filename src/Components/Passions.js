import React from 'react';
import backend from '../Assets/backend.png';
import Ai from '../Assets/Ai.png';
import Designer from '../Assets/Designer.png';
import Bug from '../Assets/Bug.png';

const Passions = () => {
  return (
    <div id='passions' className='bg-black w-full text-white my-20'>
      <div className='flex justify-center mt-8 mb-8'>
        <h1 className='font-Sora text-3xl font-normal'>
          My <span className='font-extrabold'>Passions</span>
        </h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col items-center w-full md:w-1/2 mb-8 md:mb-0'>
          <div className='w-4/5 md:w-3/5 py-4 rounded-lg flex flex-col items-center justify-center border border-white'>
            <h1 className='font-Sora text-2xl md:text-3xl text-center'>
              FullStack <span className='text-glow text-black'>Developer</span>
            </h1>
            <img src={backend} className='w-24 md:w-36' alt='Full Stack Developer' />
          </div>
          <div className='bg-white w-4/5 md:w-3/5 py-2 rounded-lg flex flex-col items-center justify-center my-5'>
            <h1 className='font-Sora text-2xl md:text-3xl text-black mb-4 text-center'>
              Artificial <span className='text-shadow text-white'>Intelligence</span>
            </h1>
            <img src={Ai} className='w-24 md:w-36' alt='Artificial Intelligence' />
          </div>
        </div>
        <div className='bg-white w-[0.5px] h-[1px] md:h-[500px]'></div>
        <div className='flex flex-col items-center w-full md:w-1/2'>
          <div className='bg-white w-4/5 md:w-3/5 py-2 rounded-lg flex flex-col items-center justify-center'>
            <h1 className='font-Sora text-2xl md:text-3xl text-black mb-4 text-center'>
              Full Stack<span className='text-shadow text-white'> Designer</span>
            </h1>
            <img src={Designer} className='w-24 md:w-36' alt='Full Stack Designer' />
          </div>
          <div className='w-4/5 md:w-3/5 py-4 rounded-lg flex flex-col items-center justify-center my-5 border border-white'>
            <h1 className='font-Sora text-2xl md:text-3xl text-center'>
              Reverse <span className='text-glow text-black'>Engineering</span>
            </h1>
            <img src={Bug} className='w-24 md:w-36' alt='Reverse Engineering' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passions;
