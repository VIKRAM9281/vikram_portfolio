import CV from "../../assets/vikramCV.pdf";

function CTA() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
      
      <a
        href={CV}
        download
        className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
      >
        Download Resume
      </a>

      <a
        href="#contact"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Let's Talk
      </a>

    </div>
  );
}

export default CTA;