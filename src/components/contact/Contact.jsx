import React, { useRef } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { useAlert } from "react-alert";

const Contact = () => {
  const form = useRef();
  const alert = useAlert();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ahvgx1l",
        "template_6amffwe",
        form.current,
        "n3GHMnoyalLQxrTwx"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          alert.show(
            "Contact form is successfully sent, thank you for your feedback!"
          );
        },
        (error) => {
          console.log(error.text);
          alert.show("Failed to send your message, please try again.");
        }
      );
    // clear input after form submitted
    form.current.reset();
  };
  return (
    <section id="contact">
      <h2>Contact</h2>

      <div className="container contact-container">
        <div className="contact-cards">
          <div className="contact-card">
            <AiOutlineMail className="contact-icon" />
            <h3>Email</h3>
            <a href="mailto:ching_ying.chan@smail.th-koeln.de" target="_blank">
              ching_ying.chan@smail.th-koeln.de
            </a>
          </div>
          <div className="contact-card">
            <AiFillGithub className="contact-icon" />
            <h3>Github</h3>
            <a href="https://github.com/cywind1" target="_blank">
              https://github.com/cywind1
            </a>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            aria-label="name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            aria-label="email"
            required
          />
          <textarea
            name="user_message"
            rows="7"
            placeholder="Your Message"
            aria-label="message"
            required
          />
          <div className="contact-form-btn">
            <button type="reset"> Reset</button>
            <button type="submit"> Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
