import React from 'react';
import {FaGithub, FaYoutube, FaInstagram, FaWhatsapp, FaFacebook, FaTwitter, FaTiktok, FaLinkedin} from "react-icons/fa";

const Contact = () => {
  return (
    <div className='md:hidden h-screen pt-[450px] z-1' id='Contact'>
     <div className='w-full flex justify-center items-center'>
     <h1 className='text-white text-3xl font-myname  flex justify-center items-center mb-4 md:text-5xl'>Contacts</h1>
     </div>
      <div className='w-full absolute '>
        <p className='text-[#ca2c92] text-[20px] font-bold font-mydesc  m-10'>You can contact me in any of the flollowing socials. </p>
      <ul className='flex justify-center items-center mt-6'>
        <li className='p-2 hover:scale-150 duration-300'><FaGithub className='text-gray-400' size={25} /></li>
        <li className='p-2 hover:scale-150 duration-300'><FaLinkedin className='text-gray-400' size={25} /></li>
        <li className='p-2 hover:scale-150 duration-300'><FaTwitter className='text-gray-400' size={25} /></li>
        <li className='p-2 hover:scale-150 duration-300'><FaFacebook className='text-gray-400' size={25} /></li>
        <li className='p-2 hover:scale-150 duration-300'><FaWhatsapp className='text-gray-400' size={25} /></li>
        <li className='p-2 hover:scale-150 duration-300'><FaYoutube className='text-gray-400' size={25} /></li>
        <li className='p-2 hover:scale-150 duration-300'><FaTiktok className='text-gray-400' size={25} /></li>
        <li className='p-2 hover:scale-150 duration-300'><FaInstagram className='text-gray-400' size={25} /></li>
       </ul>
      </div>
    </div>
  )
}

export default Contact