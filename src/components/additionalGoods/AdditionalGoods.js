import React from "react";
import BlockHeader from "../goods/blockHeader/BlockHeader";
import Slider from "../goods/slider/Slider";
import './AdditionalGoods.css';




function AdditionalGoods() {
   return (
      <div className="addGoods">
         <BlockHeader text="С этим товаром покупают"/>
         <Slider/>
      </div>
   )
}

export default AdditionalGoods;