import React from "react";
import "./projects.css";
import projectImg1 from "../../assets/5.1_projects.jpg";
import projectImg2 from "../../assets/5.2_projects.jpg";
import projectImg3 from "../../assets/5.3_projects.jpg";

const data = [
  {
    id: 1,
    image: projectImg1,
    title: "Screen Design Project",
    demo: "https://th-koeln.github.io/mi-bachelor-screendesign-projekte/sd-2020/chan-neubert-selim/",
  },
  {
    id: 2,
    image: projectImg2,
    title: "Internet of Things Project",
    demo: "https://github.com/aselim21/easygreeneryweb/",
  },
  {
    id: 3,
    image: projectImg3,
    title: "Web Service Project",
    demo: "https://enki-bookstore.herokuapp.com/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul className="container pro-container">
        {data.map(({ id, image, title, demo }) => {
          return (
            <li key={id} className="pro-card">
              <div className="pro-item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="pro-item-cta">
                <a href={demo} target="_blank">
                  Project Link
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
