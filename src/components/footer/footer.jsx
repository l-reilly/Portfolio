import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer_socials'>
        <a href='https://github.com/l-reilly' ><AiFillGithub /></a>
        <a href='https://www.linkedin.com/in/lilli-reilly/'><AiOutlineLinkedin /></a>
      </div>
    </footer>
  )
}

export default footer