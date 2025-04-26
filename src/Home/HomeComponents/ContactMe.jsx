import React from "react";
import "../HomeCss/ContactMe.css";
import { socialIcons } from "./HomeData";
import { Link } from "react-router-dom";

const ContactMe = () => {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <div className="contact-me">
        <div className="contact-me-heading" data-aos="fade-up">
          <h2>Get in Touch</h2>
        </div>
        <div className="contact-me-content">
          <p data-aos="zoom-in">
            If you have any other exciting projects & want to collaborate.
          </p>
          <Link to="/contact-form">
            <button data-aos="zoom-out">Contact Me</button>
          </Link>
        </div>
        <div
          className="contact-me-socials"
          data-aos="fade-up"
          data-aos-offset="1"
        >
          {socialIcons.map((icon) => (
            <a
              className="social-media-icon"
              target="_blank"
              href={icon.path}
              key={icon.path}
            >
              <i className={icon.name} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer">
        Created by <u>RONAK</u> | <i className="fa-regular fa-copyright"></i>{" "}
        {currentYear} All rights reserved.
      </div>
    </>
  );
};

export default ContactMe;
