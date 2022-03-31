import React from 'react'
import './nav.css'
import {BiHomeHeart} from 'react-icons/bi'
import {MdOutlinePermDeviceInformation} from 'react-icons/md'
import {BsBook} from 'react-icons/bs'
import {BiBookHeart} from 'react-icons/bi'
import {MdPermContactCalendar} from 'react-icons/md'
const Nav = () => {
  return (
    <nav>
      <a href='#'><BiHomeHeart size={30} style={{ fill: 'white'}}/></a>
      <a href='#about'><MdOutlinePermDeviceInformation size={30} style={{ fill: 'white'}}/></a>
      <a href='#experience'><BsBook size={30} style={{ fill: 'white'}}/></a>
      <a href='#portfolio'><BiBookHeart size={30} style={{ fill: 'white'}}/></a>
      <a href='#contact'><MdPermContactCalendar size={30} style={{ fill: 'white'}}/></a>
    </nav>
  )
}

export default Nav