import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    designation: "(Fullstack Developer)",
    name: "Anushka Gaikwad",
    review:
      "Vikram is an accomplished professional with strong fullstack development expertise and consistently delivers impactful solutions.",
  },
  {
    avatar: AVTR2,
    name: "Chetan Gaikwad",
    designation: "(Software Architect)",
    review:
      "Vikram combines strong technical skills with attention to detail and data-driven decision-making abilities.",
  },
  {
    avatar: AVTR3,
    name: "Dhiraj Tandulkar",
    designation: "(Fullstack Developer)",
    review:
      "Vikram demonstrates excellent teamwork, coding and problem-solving skills while actively improving collaborative efforts.",
  },
  {
    avatar: AVTR4,
    name: "Neha Shinde",
    designation: "(Software Engineer)",
    review:
      "Vikram is highly proficient in React, JavaScript and frontend technologies with strong problem-solving capability.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h5 className="text-gray-400 text-sm">
          {"< /Review >"}
        </h5>
        <h2 className="text-3xl sm:text-4xl font-bold">
          Testimonials
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="max-w-3xl mx-auto"
      >
        {data.map(({ avatar, name, review, designation }, index) => (
          <SwiperSlide key={index}>

            <div
              className="bg-white/5 backdrop-blur-md border border-white/10
              rounded-2xl p-8 text-center shadow-lg
              flex flex-col items-center gap-4"
            >

              {/* Avatar */}
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500">
                <img
                  src={avatar}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h5 className="text-lg font-semibold">
                {name}
              </h5>

              <p className="text-blue-400 text-sm">
                {designation}
              </p>

              {/* Review */}
              <small className="text-gray-300 leading-relaxed max-w-xl">
                {review}
              </small>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;