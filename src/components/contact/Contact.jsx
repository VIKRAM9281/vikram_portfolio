import React, { useState } from "react";
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

    window.location.href = `mailto:vikrambhosale820@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const phoneNumber = "918446739782";
  const message = "Hello Vikram, I saw your portfolio.";

  return (
    <section id="contact" className="py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h5 className="text-gray-400 text-sm">
          {"< Get In Touch />"}
        </h5>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Contact Me
        </h2>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto grid 
        md:grid-cols-2 gap-10">

        {/* CONTACT OPTIONS */}
        <div className="space-y-5">

          {/* Email */}
          <article className="bg-white/5 backdrop-blur-md
            border border-white/10 rounded-xl p-6 text-center
            hover:scale-105 transition">

            <MdOutlineEmail className="mx-auto text-2xl text-blue-400 mb-2" />
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-400 text-sm">
              vikrambhosale820@gmail.com
            </p>
            <a
              href="mailto:vikrambhosale820@gmail.com"
              className="text-blue-400 text-sm"
            >
              Send Message
            </a>
          </article>

          {/* LinkedIn */}
          <article className="bg-white/5 backdrop-blur-md
            border border-white/10 rounded-xl p-6 text-center
            hover:scale-105 transition">

            <BsLinkedin className="mx-auto text-2xl text-blue-400 mb-2" />
            <h4 className="font-semibold">LinkedIn</h4>

            <a
              href="https://www.linkedin.com/in/vikram-bhosale-a14385266/"
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 text-sm"
            >
              Connect
            </a>
          </article>

          {/* WhatsApp */}
          <article className="bg-white/5 backdrop-blur-md
            border border-white/10 rounded-xl p-6 text-center
            hover:scale-105 transition">

            <BsWhatsapp className="mx-auto text-2xl text-green-400 mb-2" />
            <h4 className="font-semibold">WhatsApp</h4>
            <p className="text-gray-400 text-sm">
              +91 8446739782
            </p>

            <a
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noreferrer"
              className="text-green-400 text-sm"
            >
              Send Message
            </a>
          </article>

        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={sendEmail}
          className="bg-white/5 backdrop-blur-md
          border border-white/10 rounded-xl p-8
          flex flex-col gap-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            onChange={handleChange}
            className="bg-transparent border border-white/20
            rounded-lg p-3 outline-none focus:border-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={handleChange}
            className="bg-transparent border border-white/20
            rounded-lg p-3 outline-none focus:border-blue-400"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            onChange={handleChange}
            className="bg-transparent border border-white/20
            rounded-lg p-3 outline-none focus:border-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600
            text-white py-3 rounded-lg transition"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;