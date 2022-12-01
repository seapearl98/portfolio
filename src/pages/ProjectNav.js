import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../styles/ProjectNav.scss'

function ProjectNav({IoMdRefresh}) {

  useEffect(()=>{   

  })

  

  return (
    <div className='projectnav'>
        <ul className='navbox'>
          <li className='navi on'>
              <span>CJONE</span>
              <img src="./img/blink.png" alt="반짝이" />
          </li>
          <li className='navi'>
              <span>ATWOM</span>
              <img src="./img/blink.png" alt="반짝이" />
          </li>
          <li className='navi'>
              <span>KA-TALK</span>
              <img src="./img/blink.png" alt="반짝이" />
          </li>
          <li className='navi'>
            <span>NETFLIX</span>
            <img src="./img/blink.png" alt="반짝이" />
          </li>
        </ul>
        <span></span>
    </div>
  )
}

export default ProjectNav