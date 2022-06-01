import React from 'react';
import "./nav.css";
import {MdHome} from 'react-icons/md';
import {FcAbout} from 'react-icons/fc';
import {MdWork} from 'react-icons/md';
import {MdOutlineAccessibility} from 'react-icons/md';
import {MdOutlineContactMail} from 'react-icons/md';

const Nav = () => {
  return (
    <nav>
      <a href='#'><MdHome/></a>
      <a href='#about'><FcAbout/></a>
      <a href='#experience'><MdWork/></a>
      <a href='#accessibility'><MdOutlineAccessibility/></a>
      <a href='#contact'><MdOutlineContactMail/></a>
    </nav>
  )
}

export default Nav