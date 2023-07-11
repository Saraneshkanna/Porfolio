import React from 'react'
import "../styles/Skills.css"
import SkillBalls from '../components/SkillBalls';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Skills() {
  return (
    <div className='page'>
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='content'>
        <div className='skillsTitle'>
          <h2>My Skills</h2>
          <p>Here are some of the technologies that I love using!</p>
          <p>(PS: Try turning the hearts around to discover more of my skills)</p>
        </div>
        <div className='skills'>
          <SkillBalls />
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Skills;