import React from "react";
import "./nav.css";
import { MdHome } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { MdWork } from "react-icons/md";
import { MdOutlineAccessibility } from "react-icons/md";
import { MdOutlineContactMail } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#" ? "active" : ""}
        aria-label="home icon"
      >
        <MdHome size={"2em"} />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
        aria-label="about icon"
      >
        <FcAbout size={"2em"} />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
        aria-label="work icon"
      >
        <MdWork size={"2em"} />
      </a>
      <a
        href="#accessibility"
        onClick={() => setActiveNav("#accessibility")}
        className={activeNav === "#accessibility" ? "active" : ""}
        aria-label="accessibility icon"
      >
        <MdOutlineAccessibility size={"2em"} />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
        aria-label="project icon"
      >
        <GrProjects size={"2em"} />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
        aria-label="contact icon"
      >
        <MdOutlineContactMail size={"2em"} />
      </a>
    </nav>
  );
};

export default Nav;
