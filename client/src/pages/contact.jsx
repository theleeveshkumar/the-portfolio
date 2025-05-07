import React from "react";
import "./css/contact.css";
import contactIcon from "../assets/contact.svg";
import mailIcon from "../assets/mail.svg";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <img src={contactIcon} alt="Contact Icon" className="contact-icon" />
        <div className="contact-title">
          <h2>Let's Connect</h2>
        </div>
      </div>

      <div className="email-box">
        <img src={mailIcon} alt="Email Me" className="mail-icon" />
        <p>
          <a href="mailto:leeveshkumar24@gmail.com">leeveshkumar24@gmail.com</a>
          <br />
          <a href="mailto:leeveshkumar2022@vitbhopal.ac.in">
            leeveshkumar2022@vitbhopal.ac.in
          </a>
        </p>
      </div>

      <p className="contact-description">
        I'm always open to connecting with passionate minds, collaborators, or
        anyone curious about my work. <br /> Whether you want to discuss a
        project, opportunity, or just say hi — feel free to reach out!
      </p>

      <div className="contact-buttons">
        <a
          href="https://x.com/kumar_leevesh"
          target="_blank"
          rel="noreferrer"
          className="contact-btn twitter"
        >
          <span>Twitter</span>
        </a>
        <a
          href="https://www.linkedin.com/in/leevesh-kumar/"
          target="_blank"
          rel="noreferrer"
          className="contact-btn linkedin"
        >
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/theleeveshkumar/"
          target="_blank"
          rel="noreferrer"
          className="contact-btn github"
        >
          <span>GitHub</span>
        </a>
      </div>

      <p className="collab-text">
        Interested in collaborating? Let's work together to bring your vision to
        life.
      </p>
    </section>
  );
};

export default Contact;
