import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import GoodsCard from "../goodsCard/GoodsCard";
import s from './Slider.module.scss';



function Slider() {
   return (
      <Swiper
         className={s.slider} tag="ul" navigation  spaceBetween={30}
         slidesPerView={4}
         onInit={(swiper) => console.log('Swiper initialized!', swiper)}
         onSlideChange={(swiper) => {
            console.log('Slide index changed to: ', swiper.activeIndex);
         }}
         onReachEnd={() => console.log('Swiper end reached')}
      >

         <SwiperSlide className={s.sliderItem} tag="li"> <GoodsCard text="Водонепроницаемый Рюкзак" text2="9 800 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательный жилет BRP Men's Airflow PFD" text2="6 900 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="BRP Audio-Premium System" text2="68 000 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" /></SwiperSlide>
         <SwiperSlide className={s.sliderItem} tag="li"><GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" /></SwiperSlide>

      </Swiper >
   );
}

export default Slider;