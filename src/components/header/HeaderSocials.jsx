import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 fixed left-6 bottom-20 text-xl text-gray-700">
      
      <a
        href="https://www.linkedin.com/in/vikram-bhosale-a14385266/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-blue-600 transition"
      >
        <AiFillLinkedin />
      </a>

      <a
        href="https://github.com/VIKRAM9281/"
        target="_blank"
        rel="noreferrer"
        className="hover:text-black transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="hover:text-sky-500 transition"
      >
        <BsTwitter />
      </a>

    </div>
  );
};

export default HeaderSocials;