import React from "react";
import GoodsCard from "../goodsCard/GoodsCard";
import './Slider.css';



function Slider() {
   return (
      <div className="goods__slider">
         <div className="goods__slider-cards">
            <GoodsCard text="Водонепроницаемый Рюкзак" text2="9 800 ₽" />
            <GoodsCard text="Спасательный жилет BRP Men's Airflow PFD" text2="6 900 ₽" />
            <GoodsCard text="BRP Audio-Premium System" text2="68 000 ₽" />
            <GoodsCard text="Спасательное снаряжение" text2="68 000 ₽" />
         </div>

      </div>
   )
}

export default Slider;