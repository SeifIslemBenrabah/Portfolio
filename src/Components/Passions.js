import React from 'react'
import backend from '../Assets/backend.png'
import Coding from '../Assets/Coding.png'
const Passions = () => {
  return (
    <div id='passions' className='bg-black w-full text-white my-10'>
      <div className='flex justify-center my-14'>
        <h1 className='font-Sora text-3xl font-normal'>
          My <span className='font-extrabold'>Passions</span>
        </h1>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col w-1/2'>
            <div className='flex flex-col items-center '>
                <h1 className='font-Sora text-3xl ml-20'>full stack <span className='text-glow text-black'>Developer</span></h1>
                <img src={backend} style={{width:'300px'}}/>
            </div>
        </div>
        <div className='bg-white w-[0.5px] h-96'></div>
        <div className='flex flex-col w-1/2 items-center'>
        <div className='bg-white w-10/12 h-72 items-center rounded-lg '>
        <h1 className='font-Sora text-3xl ml-20 text-black'>full stack <span className='text-shadow text-white'>Developer</span></h1>
                <img src={Coding} style={{width:'300px'}}/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Passions
