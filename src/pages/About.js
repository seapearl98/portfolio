import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/About.scss'

function About({IoMdRefresh}) {
  return (
    <section className='about'>
        <div className='me'>
            <div className='aboutme'>About me</div>
        </div>
        <div className='about_totalbox'>
            <div className='leftbox'>
                    <div>Channel</div>
                    <span className='github'><a href="https://github.com/seapearl98" target={'_blank'}>Github</a></span>
                    <div className='line'></div>
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
                    {/* <img src={require('/img/mypic.png').default} alt='my_picture'/> */}
                    <img src='/src/img/mypic.png' alt='my_picture'/>
                </div>
                <div className='colorbox'></div>
            </div>
        </div>
    </section>
  )
}

export default About