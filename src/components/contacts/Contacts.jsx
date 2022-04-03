import React from 'react'
import "./contacts.css"
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'

export const contacts = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <HiOutlineMail className='contact_icon'/>
            <h4>Email</h4>
            <h5>lilli.reilly@gmail.com</h5>
            <a href="mailto:lilli.reilly@gmail.com">Send an Email</a>
          </article>
          <article className='contact_option'>
            <AiOutlineLinkedin className='contact_icon'/>
            <h4>LinkedIn</h4>
            <a href='https://www.linkedin.com/in/lilli-reilly'>Check out my profile</a>
          </article>
        </div>
      </div>
    </section>
  )
}
export default contacts