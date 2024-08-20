import React from 'react';
import { ReactComponent as Photo2 } from '../Assets/Photo2.svg';

const Aboutme = () => {
  return (
    <div id='aboutme' className='px-4 py-8 md:py-16'>
      <div className='flex flex-col md:flex-row md:mx-24'>
        <div className='flex justify-center md:mr-12 md:w-1/2'>
          <Photo2 className='w-full max-w-xs md:max-w-md' />
        </div>
        <div className='mt-8 md:mt-0 md:w-1/2'>
          <div>
            <h1 className='font-Sora text-3xl md:text-4xl font-medium mb-4 md:mb-6'>
              About <span className='font-extrabold'>Me</span>
            </h1>
          </div>
          <h1 className='font-Sora text-sm md:text-base leading-relaxed'>
            I'm a passionate, self-proclaimed full stack designer 
            specializing in web development using the MERN stack 
            (MongoDB, Express.js, React.js, Node.js). I thrive on bringing both the 
            technical and visual aspects of digital products to life, with a deep 
            focus on user experience, pixel-perfect design, and writing clean, highly performant code.
            <br/><br/>
            My journey in the world of tech began in 2021 when I started studying 
            at the University of M'sila. During my studies, I won the concours for 
            access to ESI-SBA, which set the stage for my growth as a developer. 
            Now, with a few years of experience under my belt, I'm on track to earn 
            my master’s degree, having delved into building advanced web applications 
            and exploring the exciting world of artificial intelligence.
            <br/><br/>
            When I’m not coding, I explore tech communities on LinkedIn 
            and Instagram, following startups and sharing design updates. 
            Connect with me on Instagram for design content, LinkedIn for 
            professional insights, and check out my GitHub for my open-source projects.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
