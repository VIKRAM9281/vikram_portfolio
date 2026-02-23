import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
{
  avatar: AVTR1,
  designation: "(Fullstack Developer)",
  name : 'Anushka Gaikwad',
  review: "vikram is an accomplished and seasoned professional. He bring an extensive background of success in fullstack development, along with the qualifications which are required to make a positive impact in this domain."
},
{
  avatar: AVTR2,
  name : 'Chetan Gaikwad',
  designation: "(Software Architect)",
  review: "vikram offer a combination of unique skills and competencies which he has developed through a lengthy and rewarding career. He has honed data driven decision making and attention to detailed skills "
},
{
  avatar: AVTR3,
  name : 'Dhiraj Tandulkar',
  designation: "(Fullstack Developer)",
  review: "vikram offer teamwork, less coding and problem-solving capabilities that you require in a Web-developer’s. role. He is always eager to discuss the possibility and improvements in collaborative team efforts."
},
{
  avatar: AVTR4,
  name : 'Neha Shinde',
  designation: "(Software Engineer)",
  review: "vikram is proficient in JavaScript, ReactJs, HTML/CSS and excellent in problem-solving. In previous roles, He has contributed to organizational improvements and attainment of key business targets."
}
]

const Testimonials = () => {
  return (
    <section id="testimonials"> 
    <h5 className='kk'>&lt; /Review &gt;</h5>
    <h2>Testimonials</h2>
    <Swiper className="container testimonials__container"
       // install Swiper modules
       modules={[ Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
      >
      
    {
    data.map(({avatar,name,review,designation}, index)=>{
      return(
        <SwiperSlide key = {index} className="testimonial">
               <div className="client__avatar">
                 <img src={avatar} alt={avatar}  />
               </div>
               <h5 className='client__name'>{name}</h5>
               <h5>{designation}</h5>
                 <small className='client__review'>{review}</small>
             </SwiperSlide>  
      )
    })
   }
    </Swiper>
    </section>
  )
}

export default Testimonials