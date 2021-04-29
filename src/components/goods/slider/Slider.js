import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import GoodsCard from "../goodsCard/GoodsCard";
import './Slider.scss';
import goodsimg1 from "../../../assets/image/goods/goodsimg.png";
import goodsimg2 from "../../../assets/image/goods/goodsimg2.png";
import goodsimg3 from "../../../assets/image/goods/goodsimg3.png";
import goodsimg4 from "../../../assets/image/goods/goodsimg4.png";

function Slider() {
   const data1 = {
      title: "Водонепроницаемый Рюкзак",
      price: "9 800 ₽",
      img: goodsimg1
   }
   const data2 = {
      title: "Спасательный жилет BRP Men's Airflow PFD",
      price: "6 900 ₽",
      img: goodsimg2
   }
   const data3 = {
      title: "BRP Audio-Premium System",
      price: "68 000 ₽",
      img: goodsimg3
   }
   const data4 = {
      title: "Спасательное снаряжение",
      price: "нет в наличии",
      img: goodsimg4
   }

   return (

      <div className="productSlider" >
         <Swiper
            className="swiper" tag="ul" navigation spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
               1200: { 
               slidesPerView: 4 },
               768: { 
               slidesPerView: 3,
               spaceBetween: 20 },
               640:{
                  width: 640,
                  slidesPerView: 2
               },
               320:{
                  slidesPerView: 1
               }
               }}
            onInit={(swiper) => console.log('Swiper initialized!', swiper)}
            onSlideChange={(swiper) => {
               console.log('Slide index changed to: ', swiper.activeIndex);
            }}
            onReachEnd={() => console.log('Swiper end reached')}
         >
            <SwiperSlide className="swiperItem" tag="li"> <GoodsCard title={data1.title} price={data1.price} img={data1.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data2.title} price={data2.price} img={data2.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data3.title} price={data3.price} img={data3.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data4.title} price={data4.price} img={data4.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data1.title} price={data1.price} img={data1.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data2.title} price={data2.price} img={data2.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data3.title} price={data3.price} img={data3.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data4.title} price={data2.price} img={data4.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data1.title} price={data1.price} img={data1.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data2.title} price={data2.price} img={data2.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data3.title} price={data3.price} img={data3.img} /></SwiperSlide>
            <SwiperSlide className="swiperItem" tag="li"><GoodsCard title={data4.title} price={data2.price} img={data4.img} /></SwiperSlide>
         </Swiper >
      </div>
   );
}

export default Slider;