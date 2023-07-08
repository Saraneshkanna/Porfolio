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
import vifrPic from "../images/Timeline/vifr.jpeg"
import unityPic from "../images/tech/unity.png"
import gitPic from "../images/tech/git.png"
import blenderPic from "../images/tech/Blender.jpg"
import CSpic from "../images/tech/CSharp.png"
import VITPic from "../images/Timeline/VIT.png"
import hsvPic from "../images/Timeline/hsv.png"
import jsPic from "../images/tech/JS.png"
import HTMLPic from "../images/tech/HTML.png"
import CSSPic from "../images/tech/CSS.png"
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='timeline'>
          <div>
            <h1>My Education & Experience:</h1>
          </div>
          <VerticalTimeline lineColor='#ffffff'>
              <VerticalTimelineElement 
                  className='vertical-timeline-element--intellect'
                  date="June 2023"
                  dateClassName='date'
                  iconStyle={{background : "#e28743", color:"#fff"}}
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

                        <p className='tools'><ConstructionIcon /> used:</p>
                      </div>
                      <img src={FigmaPic}></img>
                      <img src={HTMLPic}></img>
                      <img src={CSSPic}></img>
                      <img src={jsPic}></img>
                      <img src={ReactPic}></img>

              </VerticalTimelineElement> 
              <VerticalTimelineElement 
                  className='vertical-timeline-element--vifr'
                  date="May 2022 - July 2022"
                  iconStyle={{background : "#e28743", color:"#fff"}}
                  icon={<WorkIcon />}
                  >
                      <div className='work-desc'>
                      <div>
                        <img className='vifrLogo' src={vifrPic} />
                      </div>
                      <div className='vertical-timeline-element-title'>
                        <h2 >Unity3D Intern </h2>
                        <h3>VIFR Labs (Remote)</h3>
                      </div>
                      
                    </div>
                    
                      <p>Enter workflow description here orem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit sapien non ex pharetra consectetur. Vestibulum non gravida lectus. Proin commodo malesuada enim, ut convallis eros viverra sit amet. Ut consectetur lacinia nulla in rutrum. Maecenas convallis mi nec orci scelerisque, ac scelerisque lectus ultrices. Curabitur et dolor nec nunc sagittis finibus</p>
                      <div className='toolIcon'>

                        <p className='tools'><ConstructionIcon /> used:</p>
                      </div>
                      <img src={unityPic}></img>
                      <img src={CSpic}></img>
                      <img src={gitPic}></img>
                      <img src={blenderPic}></img>
              </VerticalTimelineElement> 
              <VerticalTimelineElement 
                  className='vertical-timeline-element--education'
                  date="2020-2024"
                  iconStyle={{background : "#cc1020", color:"#fff"}}
                  icon={<SchoolIcon />}
                  >
                       <div className='work-desc'>
                      <div className='vertical-timeline-element-title'>
                        <h2 >B.Tech Computer Science Engineering  </h2>
                        <h3>VIT University, Vellore</h3>
                        <p>CGPA: 8.99</p>
                      </div>
                      <div>
                        <img src={VITPic} />
                      </div>
                      
                    </div>
              </VerticalTimelineElement> 
              <VerticalTimelineElement 
                  className='vertical-timeline-element--education'
                  date="2020"
                  iconStyle={{background : "#cc1020", color:"#fff"}}
                  icon={<SchoolIcon />}
                  >
                       <div className='work-desc'>
                      <div>
                        <img src={hsvPic} />
                      </div>
                      <div className='vertical-timeline-element-title'>
                        <h2 >Grade XII </h2>
                        <h3>Chettinad Harishree Vidyalayam</h3>
                        <p>Grade: 96.2% (ISC)</p>
                      </div>
                    </div>
              </VerticalTimelineElement> 
              <VerticalTimelineElement 
                  className='vertical-timeline-element--education'
                  date="2018"
                  iconStyle={{background : "#cc1020", color:"#fff"}}
                  icon={<SchoolIcon />}
                  >
                      <div className='work-desc'>
                      <div className='vertical-timeline-element-title'>
                        <h2 >Grade X </h2>
                        <h3>Chettinad Harishree Vidyalayam</h3>
                        <p>Grade: 95.6% (ICSE)</p>
                      </div>
                      <div>
                        <img src={hsvPic} />
                      </div>
                      
                    </div>
              </VerticalTimelineElement> 
          </VerticalTimeline>
        </div>
        
    </div>
  )
}

export default Experience