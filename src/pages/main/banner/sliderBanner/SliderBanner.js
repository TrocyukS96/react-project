import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

import './SliderBanner.scss';
import sliderImg from "./../../../../assets/image/slider-banner/slider-banner.png";

SwiperCore.use([Navigation, Pagination]);

function SliderBanner() {

   return (
      <div className="sliderBanner">
         <Swiper
            className="swiper" tag="ul" navigation pagination spaceBetween={40}
            slidesPerView={1}
         >

            <SwiperSlide className="sliderItem" tag="li"> <img src={sliderImg} alt="slider-img" /> </SwiperSlide>
            <SwiperSlide className="sliderItem" tag="li"><img src={sliderImg} alt="slider-img" /></SwiperSlide>
            <SwiperSlide className="sliderItem" tag="li"><img src={sliderImg} alt="slider-img" /></SwiperSlide>
            <SwiperSlide className="sliderItem" tag="li"><img src={sliderImg} alt="slider-img" /></SwiperSlide>

         </Swiper>
      </div>
   );
}

export default SliderBanner;
