import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { SiFiles } from "react-icons/si";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const navItems = [
    { id: "#home", icon: <AiOutlineHome /> },
    { id: "#about", icon: <AiOutlineUser /> },
    { id: "#experience", icon: <BiBook /> },
    { id: "#portfolio", icon: <SiFiles /> },
    { id: "#contact", icon: <BiMessageSquareDetail /> },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 px-4 py-3 rounded-full
        bg-white/10 backdrop-blur-lg shadow-lg border border-white/20">

        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.id}
            onClick={() => setActiveNav(item.id)}
            className={`p-3 rounded-full text-lg transition-all duration-300
              ${
                activeNav === item.id
                  ? "bg-blue-500 text-white scale-110"
                  : "text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;