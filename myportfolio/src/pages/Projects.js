import React from 'react'
import "../styles/Works.css"
import Works from "../components/Works"

function Projects() {
  return (
    <section className='work section' id='portfolio'> 
      <h2 className='section__title'>My Projects</h2>
      <span className='section__subtitle'>Most recent projects</span>
      <Works />
    </section>
  )
}

export default Projects