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
      <div className='skills'>
        <SkillBalls />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Skills;