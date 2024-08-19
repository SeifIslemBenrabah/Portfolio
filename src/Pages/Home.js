import React from 'react'
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import Skills from '../Components/Skills'
import Passions from '../Components/Passions'
const Home = () => {
  return (
    <div className='flex flex-col'>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Passions/>
    </div>
  )
}

export default Home
