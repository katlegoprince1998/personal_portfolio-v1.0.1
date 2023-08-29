import React from 'react'

const Skills = () => {
  return (
    <div className='h-screen pt-24 w-full' id='Skills'>
      <div>
        <h1 className='text-white text-3xl font-myname flex justify-center items-center mb-4 md:text-5xl md:mb-20'>Skills</h1>
        <div className='grid grid-col-1 gap-6 justify-center md:flex md:gap-10'>
          <div className='h-60 bg-[#ca2c92] w-80 rounded-xl md:w-[500px] md:h-[400px]'>
            <h3 className='flex justify-center mt-4 font-bold text-white font-mydesc md:text-4xl'>Technical Skills</h3>
            <ol className='m-4 font-semibold font-myname text-gray-300 text-[14px] md:text-2xl'>
              <li>1. Java + Spring Boot</li>
              <li> 2. Pythong + Django</li>
              <li>3. MySql, PostGreSQL & NoSql</li>
              <li>4. CI/CD, Docker, Kubernates</li>
              <li>5. PHP</li>
              <li>6. Python</li>
              <li>7. C++</li>
            </ol>
          </div>
          <div className='h-60 bg-[#ca2c92] w-80 rounded-xl md:w-[500px] md:h-[400px]'>
          <h3 className='flex justify-center mt-4 font-bold text-white font-mydesc md:text-4xl'>Professional Skills</h3>
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