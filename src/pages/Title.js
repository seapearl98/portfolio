import React from 'react'
import Nav from './Nav'
import '../styles/Title.scss'

function Title() {
  return (
    <div className='title'>
        <h1>FRONT-END</h1>
        <span>DEVELOPER</span>
        <div className='line'></div>
        <p>언제나 한 발자국 이상 발전하고 싶은</p>
        <h2>프론트엔드 <strong>이해주</strong>입니다.</h2>
        <h3>Portfolio</h3>
        <Nav className='component'/>
    </div>
  )
}

export default Title