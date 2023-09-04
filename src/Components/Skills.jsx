
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  return (
    <div className='h-screen pt-24 w-full' id='Skills'>
      <div >
        <h1 data-aos="flip-left" className='text-white text-3xl font-myname flex justify-center items-center mb-4 md:text-5xl md:mb-20'>Skills</h1>
        <div className='grid grid-col-1 gap-6 justify-center md:flex md:gap-10'>
          <div  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='h-60 border-gray-600 border-2  w-80 rounded-xl md:w-[500px] md:h-[400px]'>
            <h3 className='flex justify-center mt-4 font-bold text-[#2e79ba] font-mydesc md:text-4xl'>Technical Skills</h3>
            <ol className='m-4 font-semibold font-myname text-gray-300 text-[12px] md:text-2xl'>
              <li>1. Java + Spring Boot</li>
              <li> 2. Pythong + Django</li>
              <li>3. MySql, PostGreSQL & NoSql</li>
              <li>4. CI/CD, Docker, Kubernates</li>
              <li>5. PHP</li>
              <li>6. RestFul API</li>
              <li>7. JavaScrpt + React JS</li>
              <li>8. Tailwind CSS & Bootstrap</li>
              <li>9. C++</li>
            </ol>
          </div>
          <div  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='h-60 border-gray-600 border-2 w-80 rounded-xl md:w-[500px] md:h-[400px]'>
          <h3 className='flex justify-center mt-4 font-bold text-[#2e79ba] font-mydesc md:text-4xl'>Professional Skills</h3>
          <ol className='m-4 font-semibold font-myname text-gray-300 text-[14px] md:text-2xl'>
              <li>1. Communication Skills</li>
              <li> 2. Logical Problem Solving Skills</li>
              <li>3. Analytical Skills</li>
              <li>4. Interpersonal Skills</li>
              <li>5. Conflict Management Skills</li>
              <li>6. Adaptability</li>
              <li>7. Growth Mindset</li>
            </ol>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Skills