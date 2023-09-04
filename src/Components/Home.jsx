import React from 'react';
import MyImage from "../Assets/dev.jpg";
import {Typewriter, Cursor} from "react-simple-typewriter";

const About = () => {

  return (
    <div className='pt-36 px-6 grid grid-cols-1 gap-8 justify-center items-center md:flex' id='Home'>
        <div className='w-full grid justify-center'>
           <div>
            <h1 className='text-[#2e79ba] text-4xl  font-extrabold font-myname md:text-4xl'>
            I'm a {' '}
        <span style={{ color: 'white', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['DevOpps Engineer', 'Software Engineer', 'Database Designer']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
           
          />
        </span>
              </h1>
           </div>
           <div className=''>
            <img  className='rounded-3xl my-4 md:h-[450px]' src={MyImage} alt="" />
           </div>
           <div className='md:w-[700px]'>
            <p className='text-white font-mydesc pt-2 md:text-2xl'>My name is <span className='text-[#2e79ba]'>Katlego Mashego</span> and I am a versatile DevOps Engineer with 1 year + experience of backend web
                development.
            </p>
           </div>
           <div>
            <button  className='bg-[#2e79ba] my-4 p-4 rounded-2xl text-white font-bold hover:scale-125 duration-200'>Download Resume</button>
           </div>
        </div>
    </div>
  )
}

export default About