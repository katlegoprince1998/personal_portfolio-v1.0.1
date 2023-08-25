import React from 'react'

const About = () => {
  return (
    <div className='h-screen py-[120px]'>
        <div>
            <h1 className='text-[#fff] text-4xl font-myname ml-4 md:pl-40 '>About Me</h1>
        </div>
        <div className='grid grid-cols-1 gap-3 m-4 text-white md:flex md:w-full md:m-20 md:justify-center '>
          <div className='bg-[#ca2c92] rounded-3xl p-4 font-sm font-myname md:w-[700px] md:p-10 md:text-2xl'>
          <p className=''>Hello! I'm <span className='text-white'>Katlego Mashego</span>, a seasoned DevOps engineer with a passion for bridging 
            the gap between development and operations to deliver efficient and reliable software
             solutions. With 1+ years of experience in the field, I thrive in dynamic and collaborative 
             environments where I can leverage my technical expertise to optimize development workflows,
              automate processes, and ensure seamless deployments.</p>
          </div>
          <div className='bg-[#ca2c92] rounded-3xl p-4 font-sm font-myname md:w-[700px] md:p-10 md:text-2xl'>
          <p className='mt-4'>Outside of work, I'm an avid learner, always exploring emerging technologies and industry trends.
                 When I'm not orchestrating deployments or optimizing pipelines, you can find me enjoying outdoor 
                 activities, experimenting in the kitchen, or contributing to open-source projects.</p>
          </div>
           
        </div>

    </div>
  )
}

export default About