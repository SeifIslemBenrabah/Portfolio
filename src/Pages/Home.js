import React from 'react'
import NavBar from '../Components/NavBar'
import Banner from '../Components/Banner'
import Skills from '../Components/Skills'
import Passions from '../Components/Passions'
import Aboutme from '../Components/Aboutme'
import Project from '../Components/Project'
import Contact from '../Components/Contact'
const Home = () => {
  return (
    <div className='flex flex-col'>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Passions/>
      <Aboutme/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default Home
