import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import * as THREE from 'three';

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, I'm Saranesh!</h2>
            <div className='prompt'>
                <p> And I am a Game Developer, App Developer, Blockchain Developer</p>
                <LinkedInIcon />
                <GitHubIcon />
                <EmailIcon />
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
        </div>
    </div>
  )
}

export default Home