import React from 'react';
import { ReactComponent as Git } from '../Assets/Git.svg';
import { ReactComponent as ReactIcon } from '../Assets/React.svg';
import { ReactComponent as TailwindCSS } from '../Assets/TailwindCSS.svg';
import { ReactComponent as Mui } from '../Assets/Mui.svg';
import { ReactComponent as Html } from '../Assets/Html.svg';
import { ReactComponent as Css } from '../Assets/Css.svg';
import { ReactComponent as NodeIcon } from '../Assets/Nodeicon.svg';
import { ReactComponent as Postman } from '../Assets/Postman.svg';
import { ReactComponent as Figma } from '../Assets/Figma.svg';
import { ReactComponent as AfterEffects } from '../Assets/Ae.svg';
import { ReactComponent as Illustrator } from '../Assets/Ai.svg';
import { ReactComponent as Axios } from '../Assets/Axios.svg';
import { ReactComponent as Npm } from '../Assets/Npm.svg';
import { ReactComponent as PremierePro } from '../Assets/Pr.svg';
import { ReactComponent as Github } from '../Assets/Github.svg';
import { ReactComponent as Javascript } from '../Assets/Javascript.svg';
import { ReactComponent as Express } from '../Assets/Express.svg';
import { ReactComponent as Docker } from '../Assets/Docker.svg';
import { ReactComponent as Jest } from '../Assets/Jest.svg';
import { ReactComponent as Mysql } from '../Assets/Mysql.svg';
import { ReactComponent as MongoDB } from '../Assets/MongoDB.svg';
import { ReactComponent as Photoshop } from '../Assets/Photoshop.svg';

const svgSize = { width: '50px', height: '50px' };

const Skills = () => {
  return (
    <div id="skills" className="px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className='flex justify-center'>
        <h1 className='font-Sora text-3xl font-medium text-center'>
          My <span className='font-extrabold'>Skills</span>
        </h1>
      </div>

      <div className='my-10'>
        <h1 className='font-Sora text-xl font-extrabold ml-6 mb-4'>USING NOW:</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
          {[
            { Component: Html, label: 'Html' },
            { Component: Css, label: 'CSS' },
            { Component: Javascript, label: 'Javascript' },
            { Component: TailwindCSS, label: 'Tailwind' },
            { Component: ReactIcon, label: 'React' },
            { Component: Mui, label: 'Mui' },
            { Component: NodeIcon, label: 'Node' },
            { Component: Axios, label: 'Axios', style: { width: '65px', height: '60px' } },
            { Component: Postman, label: 'Postman' },
            { Component: Npm, label: 'npm' },
            { Component: Github, label: 'Github' },
            { Component: Git, label: 'Git' },
            { Component: Figma, label: 'Figma' },
            { Component: Illustrator, label: 'Illustrator' },
            { Component: AfterEffects, label: 'After Effects' },
            { Component: PremierePro, label: 'Premiere Pro' },
          ].map(({ Component, label, style = svgSize }, index) => (
            <div key={index} className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
              <Component style={style} />
              <h1 className='font-Sora text-xl font-medium'>{label}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className='my-10'>
        <h1 className='font-Sora text-xl font-extrabold ml-6 mb-4'>LEARNING:</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
          {[
            { Component: Express, label: 'Express' },
            { Component: Docker, label: 'Docker' },
            { Component: MongoDB, label: 'MongoDB' },
            { Component: Mysql, label: 'Mysql' },
            { Component: Jest, label: 'Jest' },
            { Component: Photoshop, label: 'Photoshop' },
          ].map(({ Component, label }, index) => (
            <div key={index} className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
              <Component style={svgSize} />
              <h1 className='font-Sora text-xl font-medium'>{label}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
