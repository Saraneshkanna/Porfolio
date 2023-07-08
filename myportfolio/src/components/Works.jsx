import React from 'react'
import { ProjectsData } from './Data';
import { projectsNav } from './Data';

const Works = () => {
  return (
    <div className='work__filters'>
        {projectsNav.map((item, index) =>{
            return (
                <span className='worrk__item' key={index}>{item.name}</span>
            )
        })}
    </div>
  )
}

export default Works;