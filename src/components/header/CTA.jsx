import React from 'react'
import CV from '../../assests/Resume April 22 no phone.docx.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>

  )
}

export default CTA