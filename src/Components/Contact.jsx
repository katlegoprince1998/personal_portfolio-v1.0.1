import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {FaGithub, FaYoutube, FaInstagram, FaWhatsapp, FaFacebook, FaTwitter, FaTiktok, FaLinkedin} from "react-icons/fa";
const tiktokLink = "https://www.tiktok.com/@code_world_vibes?_r=1&_d=e11gal28kh0k4d&sec_uid=MS4wLjABAAAA0aOwwC8S10vheBgRyY8mrda_iD6axqxNrjOaCff4oDtR_totZSixCqoI2oFdrJR9&share_author_id=7169747229598680070&sharer_language=en&source=h5_m&u_code=e53jaj279792g2&timestamp=1693896608&user_id=7169747229598680070&sec_user_id=MS4wLjABAAAA0aOwwC8S10vheBgRyY8mrda_iD6axqxNrjOaCff4oDtR_totZSixCqoI2oFdrJR9&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7261879596466751237&share_link_id=c76967d1-a102-4612-8671-201e438695de&share_app_id=1233&ugbiz_name=Account&ug_btm=b8727%2Cb4907&social_share_type=5";

const Contact = () => {
  return (
    <div className='md:hidden h-["200px"] pt-[150px] z-1' id='Contact'>
     <div className='w-full flex justify-center items-center'>
     <h1 data-aos="fade-left" className='text-white text-3xl font-myname  flex justify-center items-center mb-4 md:text-5xl'>Contacts</h1>
     </div>
      <div className='w-full absolute '>
        <p data-aos="fade-right" className='text-[#2e79ba] text-[20px] font-bold font-mydesc  m-10'>You can contact me in any of the flollowing socials. </p>
      <ul  className='flex justify-center items-center mt-["50px"]'>
        <li  className='p-2 hover:scale-150 duration-300'><a href='https://github.com/katlegoprince1998' target='_blank'><FaGithub className='text-gray-400' size={25} /></a></li>
        <li  className='p-2 hover:scale-150 duration-300'><a href='https://www.linkedin.com/in/katlego-prince-mashego-786900203' target='_blank'><FaLinkedin className='text-gray-400' size={25} /></a></li>
        <li  className='p-2 hover:scale-150 duration-300'><a href='https://twitter.com/ProficientDev?t=aAWPnhmPWyt8izcFNvEnlg&s=09' target='_blank'><FaTwitter className='text-gray-400' size={25} /></a></li>
        <li className='p-2 hover:scale-150 duration-300'><a href='https://www.facebook.com/profile.php?id=100086164513114&mibextid=ZbWKwL' target='_blank'><FaFacebook className='text-gray-400' size={25} /></a></li>
        <li  className='p-2 hover:scale-150 duration-300'><a href="https://wa.me/+27793016512" target='_blank'><FaWhatsapp className='text-gray-400' size={25} /></a></li>
        <li  className='p-2 hover:scale-150 duration-300'><a href='' target='_blank'><FaYoutube className='text-gray-400' size={25} /></a></li>
        <li  className='p-2 hover:scale-150 duration-300'><a href={tiktokLink} target='_blank'><FaTiktok className='text-gray-400' size={25} /></a></li>
        <li  className='p-2 hover:scale-150 duration-300'><a href='https://instagram.com/katlegoprincemashego?utm_source=qr&igshid=MThlNWY1MzQwNA==' target='_blank'><FaInstagram className='text-gray-400' size={25} /></a></li>
       </ul>
      </div>
    </div>
  )
}

export default Contact