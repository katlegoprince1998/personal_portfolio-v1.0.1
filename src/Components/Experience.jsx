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
    date="2019-2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title font-myname font-bold">Tshwane University Of Technology</h3>
    <h4 className="vertical-timeline-element-subtitle text-gray-300 font-mydesc font-semibold">Student</h4>
    <p>
      I specialised with Software Development.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2e79ba', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="July 2022 - September 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title font-myname font-bold">Eskom</h3>
    <h4 className="vertical-timeline-element-subtitle text-gray-300 font-mydesc font-semibold">Field Support Engineer</h4>
    <p>
      First-level Support
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2e79ba', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="September 2022 - May 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title font-myname font-bold">Nkgwete IT Solutions</h3>
    <h4 className="vertical-timeline-element-subtitle text-gray-300 font-mydesc font-semibold">Backend Web Developer</h4>
    <p>
      PHP, MySQL & JavaScript
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
    <h4 className="vertical-timeline-element-subtitle text-gray-300 font-mydesc font-semibold">Fullstack Web-developer</h4>
    <p>
      HTML, CSS, Tailwind CSS, JavaScript, PHP, React Js and MySQL
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#2e79ba', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="August 2023 Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FaBook />}
  >
    <h3 className="vertical-timeline-element-title font-myname font-bold">CapaCITI Tech Hub</h3>
    <h4 className="vertical-timeline-element-subtitle text-gray-300 font-mydesc font-semibold">DevOps Engineer</h4>
    <p>
     ---
    </p>
  </VerticalTimelineElement>

</VerticalTimeline>
</div>
        
      </div>
    </div>
  )
}

export default Experience