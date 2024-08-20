import React, { useState } from 'react';
import { ReactComponent as Logo } from '../Assets/Logo.svg';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative flex flex-row items-center justify-between p-4 md:p-6 mx-4 md:mx-10'>
      <div className='flex flex-row items-center mb-4 mt-4 md:mb-0 md:mt-0'>
        <Logo width="40px" height="40px" />
        <div className='font-poppins text-2xl mx-2'>|</div>
        <h1 className='font-grey-qo text-xl md:text-2xl'>Seif Islem Benrabah</h1>
      </div>

      <div className='flex md:hidden'>
        <button onClick={toggleDrawer} className='text-2xl'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <div className={`fixed inset-0 bg-black bg-opacity-75 z-40 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 md:bg-transparent md:bg-opacity-100 md:flex md:flex-row md:space-x-8 items-center`}>
        <div className='flex flex-col md:flex-row md:space-x-8 items-center p-4 md:p-0'>
          <a href="#aboutme" className='font-Sora font-semibold text-base md:text-lg text-white md:text-black'onClick={toggleDrawer}>About</a>
          <a href="#skills" className='font-Sora font-semibold text-base md:text-lg text-white md:text-black' onClick={toggleDrawer}>Skills</a>
          <a href="#passions" className='font-Sora font-semibold text-base md:text-lg text-white md:text-black' onClick={toggleDrawer}>Passions</a>
          <a href="#projects" className='font-Sora font-semibold text-base md:text-lg text-white md:text-black' onClick={toggleDrawer}>Projects</a>
          <a href="#contact" className='font-Sora font-semibold md:font-normal text-base md:text-lg bg-transparent md:bg-black text-white md:p-2 md:rounded-md'  onClick={toggleDrawer}>
            Contact
          </a>
        </div>
        <div className='absolute top-4 right-4 md:hidden'>
          <button onClick={toggleDrawer} className='text-2xl text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
