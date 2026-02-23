import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-4">

        <h5 className="text-gray-400 text-sm sm:text-base">
          Hello, I'm
        </h5>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
          Vikram Bhosale
        </h1>

        <h5 className="text-gray-400 text-sm sm:text-lg">
          React JS | Frontend Developer
        </h5>

        {/* CTA Buttons */}
        <CTA />

        {/* Description */}
        <p className="text-gray-300 max-w-2xl text-sm sm:text-base leading-relaxed mt-2">
          Passionate Frontend Developer with 3+ years of experience in building
          scalable, responsive, and high-performance web applications using
          React.js. Skilled in transforming Figma designs into clean,
          reusable UI components and developing real-time user interfaces with
          modern web technologies.
        </p>

        {/* Social Icons */}
        <div className="mt-4">
          <HeaderSocials />
        </div>

        {/* Scroll Down */}
        <a
          href="#contact"
          className="absolute bottom-6 right-4 sm:right-10 text-sm text-gray-400 rotate-90 hidden md:block"
        >
          Scroll Down →
        </a>

      </div>
    </header>
  );
};

export default Header;