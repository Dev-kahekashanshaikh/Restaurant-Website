import React from "react";
import "../Styles/ChefCarousel.css";
import Emma from "../assets/Emma.avif";
import Olivia from "../assets/Olivia.avif"
import Sofia from "../assets/Sofia.avif";
import Daniel from "../assets/Daniel.avif";
import William from "../assets/William.avif";
import Arjun from "../assets/Arjun.avif"

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const chefs = [
  {
    id: 1,
    name: "Chef William",
    speciality: "Italian Cuisine",
    experience: "12+ Years",
    image: William,
  },
  {
    id: 2,
    name: "Chef Olivia",
    speciality: "French Cuisine",
    experience: "10+ Years",
    image: Olivia,
  },
  {
    id: 3,
    name: "Chef Arjun",
    speciality: "Indian Cuisine",
    experience: "15+ Years",
    image: Arjun,
  },
  {
    id: 4,
    name: "Chef Emma",
    speciality: "Desserts",
    experience: "8+ Years",
    image:Emma,
  },
  {
    id: 5,
    name: "Chef Daniel",
    speciality: "Sea Food",
    experience: "11+ Years",
    image: Daniel,
  },
  {
    id: 6,
    name: "Chef Sofia",
    speciality: "Chinese Cuisine",
    experience: "9+ Years",
    image:Sofia,
  },
];

const ChefCarousel = () => {
  return (
    <section className="chef-section">

      <div className="section-title">
        <h4>Meet Our Experts</h4>
        <h2>Master Chefs</h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
        slidesPerView={3}
        speed={900}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
        className="chef-slider"
      >
        {chefs.map((chef) => (
          <SwiperSlide key={chef.id}>
            <div className="chef-card">

              <div className="chef-image">
                <img src={chef.image} alt={chef.name} />
              </div>

              <div className="chef-info">

                <h3>{chef.name}</h3>

                <p>{chef.speciality}</p>

                <div className="stars">
                  ⭐⭐⭐⭐⭐
                </div>

                <span>{chef.experience}</span>

                <div className="social-icons">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-instagram"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
};

export default ChefCarousel;