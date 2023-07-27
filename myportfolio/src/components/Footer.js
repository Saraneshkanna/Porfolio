import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <a href='https://www.linkedin.com/in/saraneshkanna-vivek-391661237/'><LinkedInIcon /></a>
            <a href='https://github.com/Saraneshkanna'><GitHubIcon /></a>
            <EmailIcon />
        </div>
        <p> &copy; 2023 porfolio-saraneshkanna.vercel.app</p>
    </div>
  )
}

export default Footer