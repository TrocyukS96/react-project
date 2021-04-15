import React from "react";

import s from './CardProduct.module.scss';
import CardProductImg from "./../../assets/image/cardProduct/product.svg";
import Health from "./../../assets/image/cardProduct/Group.svg";
import Vector from "./../../assets/image/cardProduct/Vector.svg";
import Star from "./../../assets/image/cardProduct/Star.svg";
import DescString from "./DescString";
import FilterLink from "./../blokFilter/blockFilterComponents/filterLink/FilterLink";
import Btn from "../btn/Btn";



function CardProduct() {
  return (

    <div className={s.cardProductContener}>

      <div className={s.cardProductLeftWrap}>

        <div className={s.cardProduct}>

          <span className={s.cardProductSpanTop}>SALE</span>

          <img className={s.cardProductImg} src={CardProductImg} alt="#" />
          
          <span className={s.cardProductSpanDiscount}>1 200 476 ₽</span>
          <span className={s.cardProductSpanPrice}>1 110 475 ₽</span>

          <span className={s.cardProductSpanPrice}>Нашли дешевле? Снизим цену!</span>

        </div>


      </div>

      <div className={s.cardProductRightWrap}>

        <div className={s.cardProductInfo}>
          
          <h4 className={s.cardProductName}>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h4>
          
          <span className={s.cardProductSubtitle}>Код товара: 	366666-2 </span>

          <div className={s.cardProductInfoImg}>
            
            <img src={Health} alt="#"/>

            <img src={Vector} alt="#"/>

            <div className={s.cardProductInfoImg}>
              <img src={ Star} alt="#"/>
              <img src={ Star} alt="#"/>
              <img src={ Star} alt="#"/>
              <img src={ Star} alt="#"/>
              <img src={ Star} alt="#"/>
            </div>


          </div>

          <a className={s.cardProductInfoLink} href="#">Характеристики</a>
          <a className={s.cardProductInfoLink} href="#">Наличие в магазине</a>


          <div className={s.cardProductDescription}>
            <DescString text1="Производитель" text2="Канада"/>
            <DescString text1="Количество мест, шт: " text2="3"/>
            <DescString text1="Мощность, л.с." text2="155"/>
            <DescString text1="Тип двигателя" text2="Бензиновый"/>
            <DescString text1="Год выпуска" text2="2018"/>
            <FilterLink/>
          </div>
          <Btn    text="Купить" 
                     style={{background: "#1C62CD", padding: "16px 55px", margin: "0 10px 0 0" }} />

        </div>

      </div>


    </div>
    
    
    
  );
}

export default CardProduct;
