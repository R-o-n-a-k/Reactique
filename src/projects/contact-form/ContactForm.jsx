import React, { useRef } from "react";
import "./ContactForm.css";
import BackToHome from "../../components/BackToHome/BackToHome";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
  const formPublicKey = import.meta.env.VITE_EMAIL_JS_KEY;
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const confirmSend = window.confirm("Are you sure you want to send?");
    if (confirmSend) {
      emailjs
        .sendForm("service_r0tesfr", "template_dd6imcg", form.current, {
          publicKey: formPublicKey,
        })
        .then(() => {
          toast.success("The form was submitted successfully");
        });
      e.target.reset();
    }
  };
  return (
    <div className="contact-form-container">
      <h2>Let's Talk Code</h2>
      <div className="contact-form">
        <form className="form-contact" ref={form} onSubmit={sendEmail}>
          <div className="form-contact-div">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              placeholder="FirstName LastName"
              required
            />
          </div>
          <div className="form-contact-div">
            <label htmlFor="">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div className="form-contact-div">
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              cols="20"
              rows="7"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>
          <button className="button contact__form-button" type="submit">
            Send <i className="fa-regular fa-paper-plane sendI"></i>
          </button>
        </form>
      </div>
      <BackToHome bgColor="gray" bottom="5%" />
    </div>
  );
};

export default ContactForm;
