import React from 'react'
import { GitHub } from '@mui/icons-material'
import { YouTube } from '@mui/icons-material'

function WorkItems({item}) {
  return (
    <div className='work__card' key={item.id}>
        <img src={item.image} className='work__img' />
        <h3 className='work__title'>{item.title}</h3>
        <p className='itemDesc'>{item.desc}</p>
        <p className='itemStack'>Tech Stack: {item.stack}</p>
        <a href={item.link} className='work__button itemLink' target='_blank'>View Project on:
            {item.id == 5 ? <YouTube /> : <GitHub />}
        </a>

    </div>
  )
}

export default WorkItems