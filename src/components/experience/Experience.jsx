import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  const frontendSkills = [
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
    "SignalR",
  ];

  const backendSkills = [
    "Node JS",
    "Express JS",
    "MongoDB",
    "Nginx",
  ];

  const tools = ["Git", "GitHub", "VS Code"];

  const SkillCard = ({ title, skills, level }) => (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 
      rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300">

      <h3 className="text-xl font-semibold text-center mb-6">
        {title}
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => (
          <article key={index} className="flex items-start gap-3">
            <BsPatchCheckFill className="text-blue-400 mt-1" />
            <div>
              <h4 className="text-sm font-medium">{skill}</h4>
              <small className="text-gray-400">{level}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h5 className="text-gray-400 text-sm">
          {"< My Technical Skills />"}
        </h5>
        <h2 className="text-3xl sm:text-4xl font-bold">
          My Experience
        </h2>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto grid 
        md:grid-cols-2 lg:grid-cols-3 gap-8">

        <SkillCard
          title="Frontend Development"
          skills={frontendSkills}
          level="Experienced"
        />

        <SkillCard
          title="Backend Technologies"
          skills={backendSkills}
          level="Intermediate"
        />

        <SkillCard
          title="Tools & Platforms"
          skills={tools}
          level="Daily Use"
        />

      </div>
    </section>
  );
};

export default Experience;