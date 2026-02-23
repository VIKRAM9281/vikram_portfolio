import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="text-light">&lt; My Technical Skills /&gt;</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        {/* ================= FRONTEND ================= */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">

            {[
              "HTML5",
              "CSS3",
              "SCSS",
              "Tailwind CSS",
              "Bootstrap 5",
              "JavaScript (ES6+)",
              "TypeScript",
              "React JS",
              "React Native",
              "Redux Toolkit",
              "WebSocket",
              "Socket.IO",
              "SignalR"
            ].map((skill, index) => (
              <article key={index} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            ))}

          </div>
        </div>

        {/* ================= BACKEND ================= */}
        <div className="experience__backend">
          <h3>Backend Technologies</h3>

          <div className="experience__content">

            {[
              "Node JS",
              "Express JS",
              "MongoDB",
              "Nginx"
            ].map((skill, index) => (
              <article key={index} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill}</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            ))}

          </div>
        </div>

        {/* ================= TOOLS ================= */}
        <div className="experience__tools">
          <h3>Tools & Platforms</h3>

          <div className="experience__content">

            {[
              "Git",
              "GitHub",
              "VS Code"
            ].map((tool, index) => (
              <article key={index} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{tool}</h4>
                  <small className="text-light">Daily Use</small>
                </div>
              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;