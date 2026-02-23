import "./about.css";
import abd from "../../assets/abd.jpeg";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsCodeSlash } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5 className="text-light">&lt; Get To Know Me /&gt;</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        {/* IMAGE SECTION */}
        <div className="about__me">
          <div className="about__me-image">
            <img src={abd} alt="Vikram Bhosale" />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="about__content">

          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>{`3+ Years Working`}</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>{`10+ Real-Time Projects`}</small>
            </article>

            <article className="about__card">
              <BsCodeSlash className="about__icon" />
              <h5>Technologies</h5>
              <small>{`React  | Javascript | Typescript | React-Native`}</small>
            </article>

          </div>

          <p>
            Frontend Developer with 3+ years of experience in building scalable,
            responsive and high-performance web applications using React.js.
            Experienced in converting Figma designs into reusable UI components
            and developing real-time applications using technologies like
            WebSocket, SignalR and WebRTC. Passionate about creating optimized
            user experiences with clean, maintainable and production-ready code.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;