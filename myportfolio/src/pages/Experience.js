import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import ConstructionIcon from '@mui/icons-material/Construction';
import Navbar from '../components/Navbar';
import ReactPic from "../images/tech/React.png"
import FigmaPic from "../images/tech/figma.png"
import intellectPic from "../images/Timeline/intellect.jpeg"
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='timeline'>
          <VerticalTimeline lineColor='#3e497a'>
              <VerticalTimelineElement 
                  className='vertical-timeline-element--intellect'
                  date="June 2023"
                  iconStyle={{background : "#3e497a", color:"#fff"}}
                  icon={<WorkIcon />}
                  >
                    <div className='work-desc'>
                      <div className='vertical-timeline-element-title'>
                        <h2 >App Development Intern </h2>
                        <h3>Intellect Design Arena, Chennai</h3>
                      </div>
                      <div>
                        <img src={intellectPic} />
                      </div>
                    </div>
                    
                      <p>Enter workflow description here orem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sapien non ex pharetra consectetur. Vestibulum non gravida lectus. Proin commodo malesuada enim, ut convallis eros viverra sit amet. Ut consectetur lacinia nulla in rutrum. Maecenas convallis mi nec orci scelerisque, ac scelerisque lectus ultrices. Curabitur et dolor nec nunc sagittis finibus</p>
                      <div className='toolIcon'>

                        <p className='tools'><ConstructionIcon /> I used:</p>
                      </div>
                      
                      <img src={ReactPic}></img>
                      <img src={FigmaPic}></img>
              </VerticalTimelineElement> 
              <VerticalTimelineElement 
                  className='vertical-timeline-element--vifr'
                  date="May 2022 - July 2022"
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