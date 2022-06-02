import React from 'react';
import "./nav.css";
import {MdHome} from 'react-icons/md';
import {FcAbout} from 'react-icons/fc';
import {MdWork} from 'react-icons/md';
import {MdOutlineAccessibility} from 'react-icons/md';
import {MdOutlineContactMail} from 'react-icons/md';
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' className={ activeNav === '#'?'active':''}><MdHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={ activeNav === '#about'?'active':''} ><FcAbout/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={ activeNav === '#experience'?'active':''}><MdWork/></a>
      <a href='#accessibility' onClick={() => setActiveNav('#accessibility')} className={ activeNav === '#accessibility'?'active':''}><MdOutlineAccessibility/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={ activeNav === '#contact'?'active':''}><MdOutlineContactMail/></a>
    </nav>
  )
}

export default Nav