import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-10 px-4">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white"
        >
          Vikram Bhosale
        </a>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">

          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-blue-400 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#portfolio" className="hover:text-blue-400 transition">
              Portfolio
            </a>
          </li>

          <li>
            <a href="#testimonials" className="hover:text-blue-400 transition">
              Testimonials
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Social Icons */}
        <div className="flex gap-5 text-xl">

          <a
            href="https://www.linkedin.com/in/vikram-bhosale-a14385266/"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-blue-500 transition"
          >
            <BsLinkedin />
          </a>

          <a
            href="https://github.com/VIKRAM9281"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-gray-700 transition"
          >
            <AiOutlineGithub />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-sky-500 transition"
          >
            <BsTwitter />
          </a>

        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center">
          <small>
            © {new Date().getFullYear()} Vikram Bhosale. All rights reserved.
          </small>
        </div>

      </div>
    </footer>
  );
};

export default Footer;