import React from "react";



import SliderBanner from "./sliderBanner/SliderBanner";
import Stock from "./stock/Stock";
import s from './Banner.module.scss';



function Banner() {
   return (
      <section className={s.wrapper}>
         <SliderBanner />
         <Stock />
      </section>
   );
}

export default Banner;