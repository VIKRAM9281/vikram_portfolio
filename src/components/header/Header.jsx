import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className="text-light">Hello, I'm</h5>

        <h1>Vikram Bhosale</h1>

        <h5 className="text-light-text">
          React JS | Frontend Developer
        </h5>

        <CTA />

        <p className="welcometext">
          Passionate Frontend Developer with 3+ years of experience in building
          scalable, responsive, and high-performance web applications using
          React.js. Skilled in transforming Figma designs into clean,
          reusable UI components and developing real-time user interfaces with
          modern web technologies.
        </p>

        <HeaderSocials />

        <a href="#contact" className="scroll__down">
          Scroll Down →
        </a>
      </div>
    </header>
  );
};

export default Header;