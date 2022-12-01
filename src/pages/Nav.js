import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.scss'

function Nav() {
  return (
    <div className='nav'>
        <span className='navigate'><Link to='about'>About me</Link></span>
        <span className='navigate'><Link to='projectpage'>Projects</Link></span>
        <span className='navigate'><Link to='contact'>Contact</Link></span>
    </div>
  )
}

export default Nav