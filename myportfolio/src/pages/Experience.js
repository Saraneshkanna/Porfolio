import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
// import '../styles/experience.css'

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement 
                className='vertical-timeline-element--education'
                date="2020-2024"
                iconStyle={{background : "#3e497a", color:"#fff"}}
                icon={<SchoolIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>VIT University, Vellore</h3>
                    <p>B.Tech Computer Science Engineering</p>
            </VerticalTimelineElement> 
        </VerticalTimeline>
    </div>
  )
}

export default Experience