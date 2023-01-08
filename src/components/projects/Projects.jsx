import React from "react";
import "./projects.css";
import projectImg1 from "../../assets/5.1_projects.jpg";
import projectImg2 from "../../assets/5.2_projects.jpg";
import projectImg3 from "../../assets/5.3_projects.jpg";

// import Swiper core and required modules
import { Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

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
    demo: "https://github.com/cywind1/FDDW-products",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <Swiper
        className="container pro-container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // TODO: autoplay speed
        autoplay={5000}
        speed={800}
      >
        {data.map(({ id, image, title, demo }) => {
          return (
            <SwiperSlide key={id} className="pro-card">
              <div className="pro-item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="pro-item-cta">
                <a href={demo} target="_blank">
                  Project Link
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Projects;
