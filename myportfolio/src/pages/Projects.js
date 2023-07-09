import React from 'react'
import "../styles/Works.css"
import Works from "../components/Works"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Projects() {
  return (
    <div className='projectsPage'>
        <Navbar></Navbar>
        <section className='work section' id='portfolio'> 
            <h2 className='section__title'>My Projects</h2>
            <span className='section__subtitle'>Most recent projects</span>
            <Works />
        </section>
        <Footer />
    </div>
    
  )
}

export default Projects