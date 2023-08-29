import React from 'react';
import {FaGithub, FaYoutube, FaWhatsapp, FaFacebook, FaTwitter, FaTiktok, FaLinkedin} from "react-icons/fa";

const Socials = () => {
   
  return (
    <div className='hidden fixed top-[30%] flex-col left-0 lg:flex'>
       <ul className=''>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#ca2c92] rounded-md ml-[-100px]'><a href="" className='flex justify-between items-center w-full text-white py-2'>LinkedIn <FaLinkedin size={30}  /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#ca2c92] rounded-md ml-[-100px]'><a href="" className='flex justify-between items-center w-full text-white py-2'>GitHub <FaGithub  size={30}/></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#ca2c92] rounded-md ml-[-100px]'><a href="" className='flex justify-between items-center w-full text-white py-2'>YouTube <FaYoutube size={30} /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#ca2c92] rounded-md ml-[-100px]'><a href="" className='flex justify-between items-center w-full text-white py-2'>WhatsApp <FaWhatsapp size={30} /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#ca2c92] rounded-md ml-[-100px]'><a href="" className='flex justify-between items-center w-full text-white py-2'>TikTok <FaTiktok size={30} /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#ca2c92] rounded-m ml-[-100px]'><a href="" className='flex justify-between items-center w-full text-white py-2'>Twitter <FaTwitter size={30} /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#ca2c92] rounded-md ml-[-100px]'><a href="" className='flex justify-between items-center w-full text-white py-2'>Facebook <FaFacebook  size={30}/></a></li>
       </ul>
    </div>
  )
}

export default Socials