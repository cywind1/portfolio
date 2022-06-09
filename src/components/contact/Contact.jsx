import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_cards">
          <div className="contact_card">
            <AiOutlineMail />
            <h3>Email</h3>
            <a href="mailto:ching_ying.chan@smail.th-koeln.de" target="_blank">
              ching_ying.chan@smail.th-koeln.de
            </a>
          </div>
          <div className="contact_card">
            <AiFillGithub />
            <h3>Github</h3>
            <a href="https://github.com/cywind1" target="_blank">
              https://github.com/cywind1
            </a>
          </div>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            type="message"
            rows="7"
            placeholder="Your Message"
            required
          />
          <button type="reset"> Reset</button>
          <button type="submit"> Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
