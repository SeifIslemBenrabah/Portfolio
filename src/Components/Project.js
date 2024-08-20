import React, { useState } from 'react';
import Agrigearstore from '../Assets/Agrigearstore.png';
import { ReactComponent as Expend } from '../Assets/Expand.svg';
import { ReactComponent as Expend1 } from '../Assets/Expand1.svg';

const Project = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div id='projects' className='bg-black w-full text-white my-10'>
      <div className='flex justify-center mt-8 mb-8'>
        <h1 className='font-Sora text-3xl font-normal'>
          My <span className='font-extrabold'>Projects</span>
        </h1>
      </div>
      <div className='flex flex-col gap-5 items-center'>
        <div
          className={`flex flex-col md:flex-row justify-around items-center border border-white w-10/12 py-0 pb-6 md:py-6 rounded-xl transition duration-500 ease-in-out ${
            isHovered1 ? 'bg-white text-black' : 'bg-black text-white'
          }`}
          onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
        >
          <div className='w-full md:w-96 h-80 rounded-lg overflow-hidden'>
            <img src={Agrigearstore} alt='AgriGearStore' className='w-full h-full object-cover transition duration-500 ease-in-out' />
          </div>
          <div className='flex flex-col h-full gap-6 w-11/12 md:w-2/5 mt-4 md:mt-0'>
            <h1 className='font-Sora text-2xl font-extrabold mb-1'>01</h1>
            <h1 className='font-Sora text-2xl font-extrabold'>AgriGearStore E-commerce website</h1>
            <p className='font-Sora text-sm font-light mb-3'>
              Agrigearstore is a comprehensive e-commerce platform designed to cater to the needs of
              the agricultural industry. The project aims to provide farmers and agricultural businesses
              with a streamlined and efficient way to purchase equipment, tools, and supplies online.
            </p>
            <div className={`transition duration-500 ease-in-out ${isHovered1 ? 'text-black' : 'text-white'}`}>
              {isHovered1 ? <Expend1 className='w-6 h-6' /> : <Expend className='w-6 h-6' />}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row justify-around items-center border border-white w-10/12 py-0 pb-6  md:py-6 rounded-xl transition duration-500 ease-in-out ${
            isHovered2 ? 'bg-white text-black' : 'bg-black text-white'
          }`}
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          <div className='w-full md:w-96 h-80 rounded-lg overflow-hidden'>
            <img src={Agrigearstore} alt='E-Learning Platform' className='w-full h-full object-cover transition duration-500 ease-in-out' />
          </div>
          <div className='flex flex-col h-full gap-6 w-11/12 md:w-2/5 mt-4 md:mt-0'>
            <h1 className='font-Sora text-2xl font-extrabold mb-1'>02</h1>
            <h1 className='font-Sora text-2xl font-extrabold'>E-Learning platform</h1>
            <p className='font-Sora text-sm font-light mb-3'>
              The E-Learning Platform is an advanced web application designed
              to revolutionize online education. This project, developed during 1cs (ESI-SBA),
              undertaken in collaboration with the team, focuses on providing a comprehensive and interactive
              learning experience for students and educators alike.
            </p>
            <div className={`transition duration-500 ease-in-out ${isHovered2 ? 'text-black' : 'text-white'}`}>
              {isHovered2 ? <Expend1 className='w-6 h-6' /> : <Expend className='w-6 h-6' />}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col md:flex-row justify-around items-center mb-10 border border-white w-10/12 py-0 pb-6   md:py-6 rounded-xl transition duration-500 ease-in-out ${
            isHovered3 ? 'bg-white text-black' : 'bg-black text-white'
          }`}
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
        >
          <div className='w-full md:w-96 h-80 rounded-lg overflow-hidden'>
            <img src={Agrigearstore} alt='Phoenix Website' className='w-full h-full object-cover transition duration-500 ease-in-out' />
          </div>
          <div className='flex flex-col h-full gap-6 w-11/12 md:w-2/5 mt-4 md:mt-0'>
            <h1 className='font-Sora text-2xl font-extrabold mb-1'>03</h1>
            <h1 className='font-Sora text-2xl font-extrabold'>Phoenix website</h1>
            <p className='font-Sora text-sm font-light mb-3'>
              The Phoenix Website is a dynamic platform designed to
              enhance fitness and wellness by providing users with
              access to a variety of gym exercises and instructional videos.
              This project focuses on delivering a comprehensive resource for
              users seeking to improve their fitness routines and achieve their
              health goals.
            </p>
            <div className={`transition duration-500  ease-in-out ${isHovered3 ? 'text-black' : 'text-white'}`}>
              {isHovered3 ? <Expend1 className='w-6 h-6' /> : <Expend className='w-6 h-6' />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
