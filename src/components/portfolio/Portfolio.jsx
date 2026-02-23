import "./portfolio.css";

import IMG1 from "../../assets/Poker.jpg";
import IMG2 from "../../assets/Dating.jpg";
import IMG3 from "../../assets/poker1.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Club Poker – Real-Time Gaming Platform (Client Project)",
    info: `
Developed a real-time online poker game similar to Rummy Circle using WebSocket technology for instant communication between players.

Technologies Used:
HTML5, CSS3, JavaScript, Bootstrap, React.js, Redux, WebSocket,Redux Toolkit, React Router, Webpack.

Team Size:
5 Developers

Key Achievements:
• Built authentication modules (Login, Registration, Forgot Password)
• Implemented real-time gameplay updates
• Delivered seamless multiplayer gaming experience
`,
  },
  {
    id: 2,
    image: IMG2,
    title: "Ziggata – Real-Time Dating & Streaming App (Client Project)",
    info: `
Developed a real-time video streaming application where users join themed rooms such as Movies, Romance, Gaming, Cricket and Travel.

Technologies Used:
React native, JavaScript, CSS3, WebRTC.,stun-server, socket.io, node js, 
Team Size:
4 Developers

Key Achievements:
• Implemented peer-to-peer live video streaming using WebRTC
• Enabled real-time user interaction through live chat
• Built scalable streaming room interface
`,
  },
  {
    id: 3,
    image: IMG3,
    title: "Andar Bahar Game – Real-Time Casino Application (Client Project)",
    info: `
Worked as UI Developer responsible for building scalable and responsive UI based on Figma designs.

Technologies Used:
React.js, TypeScript, CSS3,tailwind-css,SCSS, Redux-toolkit, SignalR.
Team Size:
4 Developers

Responsibilities:
• Developed reusable UI components
• Implemented real-time updates using SignalR
• Added form validation and error handling
• Optimized UI performance for smooth gameplay
`,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="text-light">&lt; My Recent Work /&gt;</h5>
      <h2>Professional Projects</h2>

      <div className="container portfolio__container">
        {data.map((project) => (
          <article key={project.id} className="portfolio__item">
            
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="portfolio__content">
              <h3>{project.title}</h3>
              <p className="project__info">{project.info}</p>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;