import React from "react";
import "./header.css";
import CTA from "./CTA";
import selfie from "../../assets/1_profile.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <h1> Susie Chan</h1>
        <h2> Digital Accessibility Consultant</h2>
        <CTA />
        <HeaderSocials />
        <a href="#about" className="scroll_down">
          Skip to Content
        </a>
        <div className="box">
          <img src={selfie} alt="profile pic" />
        </div>
      </div>
    </header>
  );
};

export default Header;
