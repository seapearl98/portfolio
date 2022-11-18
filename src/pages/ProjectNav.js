import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProjectNav.scss'

function ProjectNav({IoMdRefresh}) {
  return (
    <div className='projectnav'>
        <ul className='navbox'>
          <li className='nav0 on'>
              <span>CJONE</span>
              <img src="../img/blink.png" alt="반짝이" />
          </li>
          <li className='nav1'>
              <span>ATWOM</span>
              <img src="../img/blink.png" alt="반짝이" />
          </li>
          <li className='nav2'>
              <span>KA-TALK</span>
              <img src="../img/blink.png" alt="반짝이" />
          </li>
          <li className='nav3'>
            <span>NETFLIX</span>
            <img src="../img/blink.png" alt="반짝이" />
          </li>
        </ul>
        <span><Link to='/'><IoMdRefresh/></Link></span>
    </div>
  )
}

export default ProjectNav