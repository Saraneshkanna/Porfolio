import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Navbar from '../components/Navbar';
// import '../styles/experience.css'

function Experience() {
  return (
    <div className='experience'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='timeline'>
          <VerticalTimeline lineColor='#3e497a'>
              <VerticalTimelineElement 
                  className='vertical-timeline-element--work'
                  date="June-2023"
                  iconStyle={{background : "#3e497a", color:"#fff"}}
                  icon={<WorkIcon />}
                  >
                      <h2 className='vertical-timeline-element-title'>App Development Intern </h2>
                      <p>Intellect Design Arena, Chennai</p>
              </VerticalTimelineElement> 
              <VerticalTimelineElement 
                  className='vertical-timeline-element--work'
                  date="June-2023"
                  iconStyle={{background : "#3e497a", color:"#fff"}}
                  icon={<WorkIcon />}
                  >
                      <h2 className='vertical-timeline-element-title'>Unity Developer Intern</h2>
                      <p>VIFR Labs (Remote)</p>
              </VerticalTimelineElement> 
              <VerticalTimelineElement 
                  className='vertical-timeline-element--education'
                  date="2020-2024"
                  iconStyle={{background : "#3e497a", color:"#fff"}}
                  icon={<SchoolIcon />}
                  >
                      <h2 className='vertical-timeline-element-title'>B.Tech Computer Science Engineering</h2>
                      <p>VIT University, Vellore</p>
              </VerticalTimelineElement> 
              <VerticalTimelineElement 
                  className='vertical-timeline-element--education'
                  date="2020-2024"
                  iconStyle={{background : "#3e497a", color:"#fff"}}
                  icon={<SchoolIcon />}
                  >
                      <h2 className='vertical-timeline-element-title'>Grade XII</h2>
                      <p>Chettinad Harishree Vidyalayam, Chennai</p>
              </VerticalTimelineElement> 
              <VerticalTimelineElement 
                  className='vertical-timeline-element--education'
                  date="2020-2024"
                  iconStyle={{background : "#3e497a", color:"#fff"}}
                  icon={<SchoolIcon />}
                  >
                      <h2 className='vertical-timeline-element-title'>Grade X</h2>
                      <p>Chettinad Harishree Vidyalayam, Chennai</p>
              </VerticalTimelineElement> 
          </VerticalTimeline>
        </div>
        
    </div>
  )
}

export default Experience