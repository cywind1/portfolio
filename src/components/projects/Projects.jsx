import React from 'react';
import "./projects.css";
import projectImg1 from '../../assets/5.1_projects.jpg';
import projectImg2 from '../../assets/5.2_projects.jpg';
import projectImg3 from '../../assets/5.3_projects.jpg';

const Projects = () => {
  return (
    <section id='projects'>
          <h2>Projects</h2> 
           <div className='container pro-container'>
          <article className='pro-item'>
        <div className='pro-item-image'> 
        <img src={projectImg1} alt='Screen Design Project'/>
        </div>
        <h3> Screen Design Project </h3>
            <a href='https://th-koeln.github.io/mi-bachelor-screendesign-projekte/sd-2020/chan-neubert-selim/' target='_blank'> Github Link</a>
          </article>

          <article className='pro-item'>
        <div className='pro-item-image'> 
        <img src={projectImg2} alt='Internet of Things Project'/>
        </div>
        <h3> Internet of Things Project </h3>
            <a href='https://github.com/aselim21/easygreeneryweb/' target='_blank'> Github Link</a>
          </article>

 <article className='pro-item'>
        <div className='pro-item-image'> 
        <img src={projectImg3} alt='Web Service Project'/>
        </div>
        <h3> Web Service Project </h3>
            <a href='https://enki-bookstore.herokuapp.com/' target='_blank'> Heroku Link</a>
          </article>

    </div>
    </section>


  )
}

export default Projects