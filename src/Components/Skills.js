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
import {ReactComponent as Javascript} from '../Assets/Javascript.svg'
import {ReactComponent as Express} from '../Assets/Express.svg'
import {ReactComponent as Docker} from '../Assets/Docker.svg'
import {ReactComponent as Jest} from '../Assets/Jest.svg'
import {ReactComponent as Mysql} from '../Assets/Mysql.svg'
import {ReactComponent as MongoDB} from '../Assets/MongoDB.svg'
import {ReactComponent as Photoshop} from '../Assets/Photoshop.svg'
const svgSize = { width: '50px', height: '50px' };

const Skills = () => {
  return (
    <div id="skills">
      <div className='flex justify-center'>
        <h1 className='font-Sora text-3xl font-medium'>
          My <span className='font-extrabold'>Skills</span>
        </h1>
      </div>
      <div className='flex flex-col mx-40 mb-10'>
        <h1 className='font-Sora text-xl font-extrabold ml-6 mb-4'>USING NOW:</h1>
        <div className='grid grid-cols-6 gap-4'>
          
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Html style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Html</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Css style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>CSS</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Javascript style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Javascript</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <TailwindCSS style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Tailwind</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <ReactIcon style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>React</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Mui style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Mui</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <NodeIcon style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Node</h1>
          </div>
          <div className='flex flex-col items-center border border-[1.7px] border-black py-10'>
            <Axios style={{ width: '65px', height: '60px' }} />
            <h1 className='font-Sora text-xl font-medium'>Axios</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Postman style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Postman</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Npm style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>npm</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Github style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Github</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Git style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Git</h1>
          </div>
          
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Figma style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Figma</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Illustrator style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Illustrator</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <AfterEffects style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>After Effects</h1>
          </div>
          
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <PremierePro style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Premiere Pro</h1>
          </div>
        </div>
      </div>
      <div className='flex flex-col mx-40 mb-10'>
        <h1 className='font-Sora text-xl font-extrabold ml-6 mb-4'>LEARNING:</h1>
        <div className='grid grid-cols-6 gap-4'>
          
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Express style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Express</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Docker style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Docker</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <MongoDB style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>MongoDB</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Mysql style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Mysql</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Jest style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Jest</h1>
          </div>
          <div className='flex flex-col gap-3 items-center border border-[1.7px] border-black py-10'>
            <Photoshop style={svgSize} />
            <h1 className='font-Sora text-xl font-medium'>Photoshop</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
