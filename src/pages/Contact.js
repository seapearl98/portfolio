import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Contact.scss'

function Contact({IoMdRefresh}) {
  return (
    <section className='contact'>
      <h1>CONTACT</h1>
      <div className='contact_box'>
        <div className='box_inner'>
        <p className='tel'>tel. 010-5953-5133</p>
        <p>email. gown1977@naver.com</p>
        </div>
      </div>
      {/* <span><Link to='/'><IoMdRefresh/></Link></span> */}
    </section>
  )
}

export default Contact