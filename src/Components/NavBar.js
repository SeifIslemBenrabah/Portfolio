import React from 'react'
import {ReactComponent as Logo } from '../Assets/Logo.svg'
const NavBar = () => {
  return (
    <div className='flex flex-row items-center justify-between mx-10'>
      <div className='flex flex-row items-center' >
        <div>
            <Logo width="50px" height="50px" />
        </div>
        <div className='font-poppins text-3xl font-thin'>|</div>
        <h1 className='font-grey-qo text-2xl'>Seif Islem Benrabah</h1>
      </div>
      <div className='flex flex-row space-x-8 items-center'>
        <a href="#home" className='font-Sora font-semibold text-lg'>About</a>
        <a href="#skills" className='font-Sora font-semibold text-lg'>Skills</a>
        <a href="#passions" className='font-Sora font-semibold text-lg'>Passions</a>
        <a href="#projects" className='font-Sora font-semibold text-lg'>Projects</a>
        
      </div>
      <div><a href="#contact" className='font-Sora font-normal text-lg bg-black text-white p-2 rounded-md'>
            Contact
        </a></div>
    </div>
  )
}

export default NavBar
