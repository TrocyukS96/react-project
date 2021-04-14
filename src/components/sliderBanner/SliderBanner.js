
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './SliderBanner.css';
import sliderImg from "./../../assets/image/slider-banner/slider-banner.png";

SwiperCore.use([Navigation, Pagination]);

function SliderBanner() {

   return (

      <Swiper
         className="slider__items" tag="ul" navigation pagination spaceBetween={40}
         slidesPerView={1}
      >

         <SwiperSlide className="slider__item" tag="li"> <img src={sliderImg} alt="slider-img" /> </SwiperSlide>
         <SwiperSlide className="slider__item" tag="li"><img src={sliderImg} alt="slider-img" /></SwiperSlide>
         <SwiperSlide className="slider__item" tag="li"><img src={sliderImg} alt="slider-img" /></SwiperSlide>
         <SwiperSlide className="slider__item" tag="li"><img src={sliderImg} alt="slider-img" /></SwiperSlide>

      </Swiper>
   );
}

export default SliderBanner;
