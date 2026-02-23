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
HTML5, CSS3, JavaScript, Bootstrap, React.js, Redux, WebSocket, Redux Toolkit, React Router, Webpack.

Team Size: 5 Developers

Key Achievements:
• Built authentication modules
• Implemented real-time gameplay updates
• Delivered seamless multiplayer gaming experience
`,
  },
  {
    id: 2,
    image: IMG2,
    title: "Ziggata – Real-Time Dating & Streaming App (Client Project)",
    info: `
Developed a real-time video streaming application with themed rooms.

Technologies Used:
React Native, JavaScript, CSS3, WebRTC, STUN Server, Socket.IO, Node.js

Team Size: 4 Developers

Key Achievements:
• Peer-to-peer live streaming using WebRTC
• Real-time live chat
• Scalable streaming room interface
`,
  },
  {
    id: 3,
    image: IMG3,
    title: "Andar Bahar Game – Real-Time Casino Application",
    info: `
Worked as UI Developer building scalable UI from Figma designs.

Technologies Used:
React.js, TypeScript, Tailwind CSS, SCSS, Redux Toolkit, SignalR

Responsibilities:
• Reusable components
• Real-time updates
• Validation & error handling
• UI performance optimization
`,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h5 className="text-gray-400 text-sm">
          {"< My Recent Work />"}
        </h5>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Professional Projects
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 
        sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {data.map((project) => (
          <article
            key={project.id}
            className="bg-white/5 backdrop-blur-md border border-white/10
            rounded-2xl overflow-hidden shadow-lg
            hover:scale-105 transition duration-300 flex flex-col"
          >

            {/* Image */}
            <div className="h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-4">

              <h3 className="text-lg font-semibold">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">
                {project.info}
              </p>

            </div>

          </article>
        ))}

      </div>
    </section>
  );
};

export default Portfolio;