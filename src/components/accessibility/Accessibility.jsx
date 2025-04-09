import React from 'react';
import "./accessibility.css";
import {BsCheckCircle} from "react-icons/bs";

const Accessibility = () => {
  return (
        <section id='accessibility'>
        <h2>Accessibility</h2>

        <div className="container acc-container">
          <article className ='accessibility'>
            <div className ='acc-head' >
             <h3>Practical Working Experience</h3>
            </div>
            <ul className='acc-list'>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
              <p> EN 301 549 </p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
               <p> BFSG </p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
              <p> WCAG </p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
              <p> BITV</p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
              <p> ARIA </p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
                <p> NVDA </p>
              </li>
              <li>
               <BsCheckCircle className='acc-list-icon' />
               <p> JAWS </p>
               </li>
            </ul>
          </article>
        </div>
        </section>
  )
}

export default Accessibility