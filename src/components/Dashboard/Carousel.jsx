import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import './Swiper.css'
import item11 from './DashboardAssets/item11.jpg'
import item2 from './DashboardAssets/item2.jpg'
import item3 from './DashboardAssets/item3.jpg'


const Carousel  = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 1200, disableOnInteraction: false }}
      modules={[Autoplay]}
      className="carousel-container"
    >
      <SwiperSlide className="swipeimage-style">
        <img src={item11} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={item2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={item3} alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel ;
