import React from "react";
import BtnShow from "../btnShow/BtnShow";
import PointerPageSpan from "../pointerPage/PointerPageSpan";
import BlockHeader from './blockHeader/BlockHeader';
import s from './Goods.module.scss';
import Slider from "./slider/Slider";




function Goods(props) {
   return (
      <div className={s.goods}>
         <BlockHeader text="Популярные товары"/>
         <Slider/>
         {props.button &&
            <BtnShow text="Показать ещё" />
         }
      </div>
   )
}

export default Goods;