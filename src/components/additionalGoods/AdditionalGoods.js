import React from "react";
import BlockHeader from "../goods/blockHeader/BlockHeader";
import Slider from "../goods/slider/Slider";
import s from'./AdditionalGoods.module.scss';




function AdditionalGoods() {
   return (
      <div className={s.addGoods}>
         <BlockHeader text="С этим товаром покупают"/>
         <Slider/>
      </div>
   )
}

export default AdditionalGoods;