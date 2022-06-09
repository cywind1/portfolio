import React from "react";
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/ching-chan-24b696148/"
        role="img"
        aria-label="Linkedin icon"
      >
        <SiLinkedin />
      </a>
      <a href="https://github.com/cywind1/" role="img" aria-label="Github icon">
        <SiGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
