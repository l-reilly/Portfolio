import React from 'react'
import "./about.css"
import MEpic from '../../assests/at museum madrid copy.jpg'
import {CgAwards} from 'react-icons/cg'

const about = () => {
  return (
    <section id="about">
      <h2>About me</h2>
      <div className='container about_container'>
        <div className="about_me"> 
        <div className='about_me-image'>
          <img src={MEpic} alt="girl looking at lamps" />
        </div>
        </div>
        <div className='about_content'>
          <div className='"about_cards'>
            <article className='about_card'>
              <div className='title_about'>
              <h5>Experience</h5>
              </div>
              <small>Ironhack 6 month bootcamp</small>
              <br></br>
              <small>1 year of self study</small>
            </article>
          </div>
          <p>I have experience with HTML, Javascript, CSS, and React. I am constantly practicing and learning and plan on expanding my knowledge of programming languages in the coming months.</p>
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default about