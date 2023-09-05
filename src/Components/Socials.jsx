import React from 'react';
import {FaGithub, FaYoutube, FaWhatsapp, FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaLinkedin} from "react-icons/fa";
const tiktokLink = "https://www.tiktok.com/@code_world_vibes?_r=1&_d=e11gal28kh0k4d&sec_uid=MS4wLjABAAAA0aOwwC8S10vheBgRyY8mrda_iD6axqxNrjOaCff4oDtR_totZSixCqoI2oFdrJR9&share_author_id=7169747229598680070&sharer_language=en&source=h5_m&u_code=e53jaj279792g2&timestamp=1693896608&user_id=7169747229598680070&sec_user_id=MS4wLjABAAAA0aOwwC8S10vheBgRyY8mrda_iD6axqxNrjOaCff4oDtR_totZSixCqoI2oFdrJR9&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7261879596466751237&share_link_id=c76967d1-a102-4612-8671-201e438695de&share_app_id=1233&ugbiz_name=Account&ug_btm=b8727%2Cb4907&social_share_type=5";


const Socials = () => {
   
  return (
    <div className='hidden fixed top-[30%] flex-col left-0 lg:flex'>
       <ul className=''>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#2e79ba] rounded-md ml-[-100px]'><a href="https://www.linkedin.com/in/katlego-prince-mashego-786900203" target='_blank' className='flex justify-between items-center w-full text-white py-2'>LinkedIn <FaLinkedin size={30}  /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#2e79ba] rounded-md ml-[-100px]'><a href="https://github.com/katlegoprince1998" target='_blank' className='flex justify-between items-center w-full text-white py-2'>GitHub <FaGithub  size={30}/></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#2e79ba] rounded-md ml-[-100px]'><a href="" target='_blank' className='flex justify-between items-center w-full text-white py-2'>YouTube <FaYoutube size={30} /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#2e79ba] rounded-md ml-[-100px]'><a href="https://wa.me/+27793016512" target='_blank' className='flex justify-between items-center w-full text-white py-2'>WhatsApp <FaWhatsapp size={30} /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#2e79ba] rounded-md ml-[-100px]'><a href={tiktokLink} target='_blank' className='flex justify-between items-center w-full text-white py-2'>TikTok <FaTiktok size={30} /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#2e79ba] rounded-m ml-[-100px]'><a href="https://twitter.com/ProficientDev?t=aAWPnhmPWyt8izcFNvEnlg&s=09" target='_blank' className='flex justify-between items-center w-full text-white py-2'>Twitter <FaTwitter size={30} /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#2e79ba] rounded-m ml-[-100px]'><a href="https://instagram.com/katlegoprincemashego?utm_source=qr&igshid=MThlNWY1MzQwNA==" target='_blank' className='flex justify-between items-center w-full text-white py-2'>Twitter <FaInstagram size={30} /></a></li>
        <li className='flex justify-center hover:rounded-md duration-300 hover:ml-[-10px] items-center w-40 h-1/4 px-4 bg-[#2e79ba] rounded-md ml-[-100px]'><a href="https://www.facebook.com/profile.php?id=100086164513114&mibextid=ZbWKwL" target='_blank' className='flex justify-between items-center w-full text-white py-2'>Facebook <FaFacebook  size={30}/></a></li>
       </ul>
    </div>
  )
}

export default Socials