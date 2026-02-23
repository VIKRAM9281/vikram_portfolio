import React, { useState } from "react";
import "./contact.css";

import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
`;

    window.location.href =
      `mailto:vikrambhosale820@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
  };

  const phoneNumber = "918446739782";
  const message = "Hello Vikram, I saw your portfolio.";

  return (
    <section id="contact">
      <h5 className="text-light">&lt; Get In Touch /&gt;</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">

        {/* CONTACT OPTIONS */}
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>vikrambhosale820@gmail.com</h5>
            <a href="mailto:vikrambhosale820@gmail.com">
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <BsLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/vikram-bhosale-a14385266/"
              target="_blank"
              rel="noreferrer"
            >
              Connect
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 8446739782</h5>
            <a
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noreferrer"
            >
              Send Message
            </a>
          </article>

        </div>

        {/* CONTACT FORM */}
        <form onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
};

export default Contact;