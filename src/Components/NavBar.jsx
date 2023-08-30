import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'Home'
            },
        {
        id: 2,
        link: 'About'
        },
        {
            id: 3,
            link: 'Skills'
            },
            {
                id: 4,
                link: 'Projects'
                },
                {
                    id: 5,
                    link: 'Experience'
                    },
                    {
                        id: 6,
                        link: 'Contact'
                        },
    ]
  return (
    <div className='flex z-50 justify-between items-center h-20 w-full px-4 fixed'>
      <div>
        <h1 className='text-[#ca2c92] font-signature text-4xl ml-2'>Mashego.</h1>
      </div>
      <ul className='hidden md:flex'>
            {
                links.map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize text-2xl font-medium text-[#ca2c92] hover:scale-105 duration-150'>
                       <Link to={link} smooth duration={500}> { link }</Link>
                        </li>
                ))
            }

       
      </ul>
      <div onClick={() => setNav(!nav)} className='text-[#ca2c92] cursor-pointer pr-4 z-10 md:hidden'>
        {nav ?  <FaTimes size={30}  /> :  <FaBars size={30}  />}        
      </div>
      {nav && (
             <ul className='flex flex-col ease-in-out transition-transform items-start absolute top-0 left-0 pt-36 bg-[#ca2c92] font-bold h-screen w-56'>
            
             {
                links.map(({id, link}) => (
                    <li key={id} className='px-4 py-4 cursor-pointer capitalize text-2xl font-medium text-white hover:scale-105 duration-150'>
                        <Link to={link} onClick={() => setNav(!nav)} smooth duration={500}> { link }</Link>
                        </li>
                ))
            }
        </ul>
      )}
    </div>
  )
}

export default NavBar