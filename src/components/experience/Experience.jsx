import React from 'react'
import "./experience.css";
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
    <h2>My Experience</h2>
      <div className='container exp-container'>
      <div className='exp-frontend'>
        <h3> Frontend Development </h3>
        <div className='exp-content'>
          <article className='exp-details'>
            <BsPatchCheckFill/>
            <h4>HTML</h4>
            <small className='text-light'> Advanced </small>
          </article>
          <article className='exp-details'>
            <BsPatchCheckFill/>
            <h4>CSS</h4>
            <small className='text-light'> Intermediate </small>
          </article>
          <article className='exp-details'>
            <BsPatchCheckFill/>
            <h4>JAVASCRIPT</h4>
            <small className='text-light'> Beginner </small>
          </article>
          
          <article className='exp-details'>
            <BsPatchCheckFill/>
            <h4>REACT</h4>
            <small className='text-light'> Beginner </small>
          </article>
        </div>
      </div>
      
      <div className='exp-backend'>
        <h3> Backend Development </h3>
        <div className='exp-content'>
          <article className='exp-details'>
            <BsPatchCheckFill/>
            <h4>MONGO DB</h4>
            <small className='text-light'> Intermediate </small>
          </article>
          <article className='exp-details'>
            <BsPatchCheckFill/>
            <h4>NODE JS</h4>
            <small className='text-light'> Beginner </small>
          </article>
          <article className='exp-details'>
            <BsPatchCheckFill/>
            <h4>MY SQL</h4>
            <small className='text-light'> Beginner </small>
          </article>
        </div>
   </div>
        </div>
    </section>
  )
}

export default Experience