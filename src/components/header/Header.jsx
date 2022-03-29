import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assests/beach gijon pink dress copy.jpeg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Lilli Reilly</h1>
        <h5 className='text-light' >
          Web Developer
        </h5>
        <CTA />
        <HeaderSocials />
        <div className='me'>
          <img src={Me} alt="me next to the ocean" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll scroll_down</a>
  
      </div>
  
    </header>
  )
}

export default Header