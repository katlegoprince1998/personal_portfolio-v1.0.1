import React from 'react';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import {FaBook, FaChalkboard} from "react-icons/fa";

const Experience = () => {
  return (
    <div id="Experience" className='h-screen z-0'>
      <div className='text-white pt-24 w-full'>
        <h1 className='text-white text-3xl font-myname  flex justify-center items-center mb-4 md:text-5xl'>Experience</h1>
         <div>
        <VerticalTimeline className=''>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2e79ba', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2023 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title font-myname font-bold">CapacitiZA</h3>
    <h4 className="vertical-timeline-element-subtitle text-gray-300 font-mydesc font-semibold">Internship</h4>
    <p>
      Skills: HTML, CSS, JavaScript,
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2e79ba', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May 2023 - July 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title font-myname font-bold">Investhood IT</h3>
    <h4 className="vertical-timeline-element-subtitle text-gray-300 font-mydesc font-semibold">Fullstack Web Developer</h4>
    <p>
      Skills: HTML5, Javascript, Bootstrap, MySQL and PHP
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2e79ba', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="July 2022 - April 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title font-myname font-bold">Nkgwete IT Solutions</h3>
    <h4 className="vertical-timeline-element-subtitle text-gray-300 font-mydesc font-semibold">Backend Web Developer</h4>
    <p>
      PHP, MySQL & JavaScript
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
        
      </div>
    </div>
  )
}

export default Experience