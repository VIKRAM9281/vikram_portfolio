import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Logo */}
        <a
          href="#a"
          className="text-2xl font-bold tracking-wide block mb-6"
        >
          Vikram Bhosale
        </a>

        {/* Links */}
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 text-sm md:text-base">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
          <li><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a href="https://www.linkedin.com/in/vikram-bhosale-a14385266/" target="_blank" rel="noreferrer" className="hover:text-blue-400">
            <BsLinkedin />
          </a>

          <a href="https://github.com/VIKRAM9281" target="_blank" rel="noreferrer" className="hover:text-gray-400">
            <AiOutlineGithub />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400">
            <BsTwitter />
          </a>
        </div>

        {/* Copyright */}
        <small className="text-gray-400 text-xs md:text-sm">
          © Vikram Bhosale. All rights reserved.
        </small>

      </div>
    </footer>
  );
};

export default Footer;