import React from 'react'

const Projects = () => {
  return (
    <div className='h-screen pt-24 w-full' id='Projects'>
         <h1 className='text-white text-3xl font-myname flex justify-center items-center mb-4 md:text-5xl'>Projects</h1>
         <div className='grid gap-4 grid-col-1 m-4 md:m-36 md:flex'>
          <div className='border-gray-600 border-2 p-4 md:w-[500px]'>
          <h1 className='text-[#2e79ba] font-myname text-xl font-bold mb-6 '>TaxiApp</h1>
            <h3 className='text-white font-mydesc font-semibold mb-2'>Skills</h3>
            <p className='text-gray-500 font-mydesc font-semibold mb-4'>Java, React Js & MySQL</p>
            <div className='flex justify-between'>
                <a className='text-[#2e79ba] cursor-point font-bold font-myname' href="">Code</a>
                <a className='text-[#40698d] cursor-point font-bold font-myname' href="">View</a>
            </div>
          </div>
          <div className='border-gray-600 border-2 p-4 md:w-[500px]'>
          <h1 className='text-[#2e79ba] font-myname text-xl font-bold mb-6'>TaxiApp</h1>
            <h3 className='text-white font-mydesc font-semibold mb-2'>Skills</h3>
            <p className='text-gray-500 font-mydesc font-semibold mb-4'>Java, React Js & MySQL</p>
            <div className='flex justify-between'>
            <a className='text-[#2e79ba] cursor-point font-bold font-myname' href="">Code</a>
                <a className='text-[#40698d] cursor-point font-bold font-myname' href="">View</a>
            </div>
          </div>
          <div className='border-gray-600 border-2 p-4 md:w-[500px]'>
          <h1 className='text-[#2e79ba] font-myname text-xl font-bold mb-6'>TaxiApp</h1>
            <h3 className='text-white font-mydesc font-semibold mb-2'>Skills</h3>
            <p className='text-gray-500 font-mydesc font-semibold mb-4'>Java, React Js & MySQL</p>
            <div className='flex justify-between'>
            <a className='text-[#2e79ba] cursor-point font-bold font-myname' href="">Code</a>
                <a className='text-[#40698d] cursor-point font-bold font-myname' href="">View</a>
            </div>
          </div>
            
         </div>
    </div>
  )
}

export default Projects