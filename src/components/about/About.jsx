// rafce

import React from 'react';
import "./about.css";
import img_about from '../../assets/2_about.jpg';
import {FaUniversity} from 'react-icons/fa';
import {FaAward} from 'react-icons/fa';
import {FaBlind} from 'react-icons/fa';

  const About = () => {
  return (
  <section id='about'>
    <h2>About me</h2>
    <div className='container about_container'>
      <div className='about_me img_about_me'>
        <img src={img_about} alt='about me with cats'/>
      </div>

    <div className='about_content'>
      <div className='about_cards'>
        <article className='about_card'>
          <FaUniversity/>
          <h3>Education</h3>
          <p>Media Informatics</p>
        </article>
        <article className='about_card'>
          <FaAward/>
          <h3>Major</h3>
          <p>Web Development</p>
        </article>
        <article className='about_card'>
          <FaBlind/>
          <h3>Focus</h3>
          <p>Web Accessibility</p>
        </article>
      </div>
    </div>
    </div>

    </section>

  )
}

export default About