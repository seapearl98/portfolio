import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.scss'

function Nav() {
  return (
    <div className='nav'>

        <Link to='about'><span className='navigate'>About me</span></Link>
        <Link to='projectpage'><span className='navigate'>Projects</span></Link>
        <span className='navigate'>Contact</span>
    </div>
  )
}

export default Nav