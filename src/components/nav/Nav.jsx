import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {MdOutlinePermDeviceInformation} from 'react-icons/md'
import {BsBook} from 'react-icons/bs'
import {BiBookHeart} from 'react-icons/bi'
import {MdPermContactCalendar} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart size={30} style={{ fill: 'white'}}/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><MdOutlinePermDeviceInformation size={30} style={{ fill: 'white'}}/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBook size={30} style={{ fill: 'white'}}/></a>
      <a href='#portfolio'onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBookHeart size={30} style={{ fill: 'white'}}/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdPermContactCalendar size={30} style={{ fill: 'white'}}/></a>
    </nav>
  )
}

export default Nav