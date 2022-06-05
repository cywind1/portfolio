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
              <h3>Checklist</h3>
            </div>
            <ul className='acc-list'>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
                <p> Headings </p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
                <p> Text </p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
                <p> Images </p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
                <p>  Forms </p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
                <p> Page Navigation </p>
              </li>
              <li>
                <BsCheckCircle className='acc-list-icon'/> 
                <p> Links </p>
              </li>
            </ul>
          </article>
        </div>
        </section>
  )
}

export default Accessibility