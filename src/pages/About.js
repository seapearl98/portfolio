import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/About.scss'

function About({IoMdRefresh}) {
  return (
    <div className='about'>
        <div className='me'>
            <div>About me</div>
            <span><Link to='/'><IoMdRefresh/></Link></span>
        </div>
        <div className='leftbox'>
            <div>
                <div>Channel</div>
                <span className='github'><a href="https://github.com/seapearl98" target={'_blank'}>Github</a></span>
                <div className='line'></div>
            </div>
            <div className='skill'>
                <div>Skill</div>
                <span>HTML, CSS, Javascript, React</span>
                <div className='line'></div>
            </div>
            <div>
                <div>ETC</div>
                <span>Photoshop, ilustrator, Figma</span>
                <div className='line'></div>
            </div>
        </div>
        <div className="rightbox">
            <div className='imgbox'>
                <img src="../img/mypic.png" alt="내 사진" />
            </div>
            <div className='colorbox'></div>
        </div>

    </div>
  )
}

export default About