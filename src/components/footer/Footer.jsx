import React from "react";
import "./footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
        <AiOutlineCopyrightCircle className="footer-icon" />
        2022 Susie Chan All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
