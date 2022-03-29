import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/lilli-reilly/' target="_blank"><AiOutlineLinkedin /></a>
        <a href='https://github.com/l-reilly' target="_blank"> <AiFillGithub /></a>
    </div>
  )
}

export default HeaderSocials