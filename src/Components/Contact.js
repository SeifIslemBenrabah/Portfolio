import React,{useState} from 'react';
import { ReactComponent as GitHub } from '../Assets/Github.svg';
import { ReactComponent as GitHub1 } from '../Assets/Github1.svg';
import { ReactComponent as Instagram } from '../Assets/instagram.svg';
import { ReactComponent as Instagram1 } from '../Assets/Instagram1.svg';
import { ReactComponent as Linkedin } from '../Assets/linkedin.svg';
import { ReactComponent as Linkedin1 } from '../Assets/linkedin1.svg';
import {ReactComponent as WhatsApp} from '../Assets/whatsapp.svg'
import {ReactComponent as WhatsApp1} from '../Assets/whatsapp1.svg'
import Logo1 from '../Assets/Logo1.png'
import me from '../Assets/me.png'
const Contact = () => {
    const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  return (
    <div id='contact'>
        <div className='flex items-center justify-center w-full mt-12'>
      <div className='flex flex-col w-1/1 md:w-10/12 items-center gap-10'>
        <div className='flex flex-col-reverse md:flex-row w-full justify-between items-center'>
          <div className='flex flex-col gap-4 w-4/5 sm:w-1/2 justify-center'>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Your name"
              className='border border-black w-full h-10 pl-4'
            />
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Email"
              className='border border-black w-full h-10 pl-4'
            />
            <textarea
              id="message"
              name="message"
              placeholder="How can I help?"
              className="border border-black w-full h-40 p-2 placeholder-gray-500 placeholder-opacity-100"
            />
            <div className='flex flex-col sm:flex-row gap-5'>
              <button className='bg-black p-2 h-12 w-44 flex justify-center items-center text-xl font-Sora font-medium text-white'>
                Get In Touch
              </button>
              <div className='flex flex-row gap-5 justify-center'>
              <a
                href="https://www.linkedin.com/in/seifislembenrabah"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 h-12 w-12 hover:bg-black border border-black flex items-center justify-center"
                onMouseEnter={() => setIsHovered1(true)}
          onMouseLeave={() => setIsHovered1(false)}
              >
                {isHovered1 ?<Linkedin1 style={{ width: '50px', height: '30px' }} />:<Linkedin style={{ width: '50px', height: '30px' }} />}
              </a>
              <a
                href="https://github.com/SeifIslemBenrabah"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 h-12 w-12 hover:bg-black border border-black flex items-center justify-center"
                onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
              >
                {isHovered4?<GitHub1 style={{ width: '50px', height: '40px' }} />:<GitHub style={{ width: '50px', height: '40px' }} />}
              </a>
              <a
                href="https://www.instagram.com/design_and_dev_space"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 h-12 w-12 hover:bg-black border border-black flex items-center justify-center"
                onMouseEnter={() => setIsHovered3(true)}
                onMouseLeave={() => setIsHovered3(false)}
              >
                {isHovered3?<Instagram style={{ width: '50px', height: '40px' }} />:<Instagram1 style={{ width: '50px', height: '40px' }} />}
              </a>
              <a
                href="https://wa.me/213660987635" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-2 h-12 w-12 hover:bg-black border border-black flex items-center justify-center"
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                {isHovered2?<WhatsApp1 style={{ width: '50px', height: '40px' }} />:<WhatsApp style={{ width: '50px', height: '40px' }} />}
              </a>
              </div>
            </div>
          </div>
          <div className='flex flex-col  items-center w-4/5 sm:w-1/2 gap-12 mb-20'>
          <div className='flex flex-col sm:flex-row items-center gap-3 ml-0 sm:ml-12'>
          <img src={me} style={{width:'120px'}}/>
            <h1 className='font-Sora text-3xl font-extrabold text-center sm:text-left'>
              Let’s <span className='text-shadow text-white'>talk</span> for <br />
              Something special
            </h1>
            </div>
            <p className='font-Sora text-sm ml-0 sm:ml-12'> I seek to push the limits of creativity to create high-engaging, user-<br/>friendly,
                 and memorable interactive experiences.</p>
          </div>
        </div>
        </div>
      </div>
      <div className='bg-black w-full h-28 mt-16 flex justify-center items-center'>
            <a
            href="https://www.instagram.com/design_and_dev_space"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={Logo1} style={{width:'100px'}}/>
            </a>
        </div>
    </div>
  );
};

export default Contact;
