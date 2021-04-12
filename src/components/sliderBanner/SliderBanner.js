
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import './SliderBanner.css';
import sliderImg from "./../../assets/image/slider-banner/slider-banner.png";

SwiperCore.use([Navigation, Pagination]);

function SliderBanner() {
   // const slides = [];
   // for (let i = 0; i < 5; i += 1) {
   //    // slides.push(
   //    //    <SwiperSlide key={`slide-${i}`} tag="li">
   //    //       <img
   //    //          src={`https://picsum.photos/id/${i + 1}/500/300`}
   //    //          style={{ listStyle: 'none' }}
   //    //          alt={`Slide ${i}`}
   //    //       />
   //    //    </SwiperSlide>
   //    // );
   // }
   return (

      <Swiper
         className="slider__items" tag="ul" navigation pagination spaceBetween={40}
         slidesPerView={1}
         onInit={(swiper) => console.log('Swiper initialized!', swiper)}
         onSlideChange={(swiper) => {
            console.log('Slide index changed to: ', swiper.activeIndex);
         }}
         onReachEnd={() => console.log('Swiper end reached')}
      >

         <SwiperSlide className="slider__item" tag="li"> <img src={sliderImg} alt="slider-img" /> </SwiperSlide>
         <SwiperSlide className="slider__item"><img src={sliderImg} alt="slider-img" /></SwiperSlide>
         <SwiperSlide className="slider__item"><img src={sliderImg} alt="slider-img" /></SwiperSlide>
         <SwiperSlide className="slider__item"><img src={sliderImg} alt="slider-img" /></SwiperSlide>
      ...
      </Swiper>
   );
}

export default SliderBanner;
