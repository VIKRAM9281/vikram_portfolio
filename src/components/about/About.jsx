import abd from "../../assets/vikramphoto.jpeg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { BsCodeSlash } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h5 className="text-gray-400 text-sm">
          {"< Get To Know Me />"}
        </h5>
        <h2 className="text-3xl sm:text-4xl font-bold">
          About Me
        </h2>
      </div>

      {/* Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* ✅ IMAGE SECTION FIXED */}
        <div className="flex justify-center md:justify-start">
          <div
            className="
            w-64
            sm:w-80
            md:w-96
            aspect-[3/4]
            rounded-2xl
            overflow-hidden
            shadow-2xl
            border border-gray-700
            "
          >
            <img
              src={abd}
              alt="Vikram Bhosale"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-6">

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <article className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:scale-105 transition">
              <FaAward className="mx-auto text-xl mb-2 text-blue-400" />
              <h5 className="font-semibold">Experience</h5>
              <small className="text-gray-400">
                3+ Years Working
              </small>
            </article>

            <article className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:scale-105 transition">
              <VscFolderLibrary className="mx-auto text-xl mb-2 text-blue-400" />
              <h5 className="font-semibold">Projects</h5>
              <small className="text-gray-400">
                10+ Real-Time Projects
              </small>
            </article>

            <article className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 text-center hover:scale-105 transition">
              <BsCodeSlash className="mx-auto text-xl mb-2 text-blue-400" />
              <h5 className="font-semibold">Technologies</h5>
              <small className="text-gray-400 text-xs">
                React | JavaScript | TypeScript | React Native
              </small>
            </article>

          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Frontend Developer with 3+ years of experience in building scalable,
            responsive and high-performance web applications using React.js.
            Experienced in converting Figma designs into reusable UI components
            and developing real-time applications using WebSocket, SignalR and WebRTC.
          </p>

          {/* Button */}
          <a
            href="#contact"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
          >
            Let's Talk
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;