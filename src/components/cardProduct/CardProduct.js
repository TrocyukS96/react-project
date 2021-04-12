import React from "react";

import './CardProduct.css';
import CardProductImg from "./../../assets/image/cardProduct/product.svg";
import Health from "./../../assets/image/cardProduct/Group.svg";
import Vector from "./../../assets/image/cardProduct/Vector.svg";
import Star from "./../../assets/image/cardProduct/Star.svg";
import DescString from "./DescString";
import FilterLink from "../BlokFilter/BlokFilterComponents/filterLink/FilterLink";
import Btn from "../btn/Btn";



function CardProduct() {
  return (

    <div className="card-product-contener">

      <div className="card-product-left-wrap">

        <div className="card-product">

          <span className="card-product-span-top">SALE</span>

          <img className="card-product-img" src={CardProductImg} />  
          
          <span className="card-product-span-discount">1 200 476 ₽</span>

          <span className="card-product-span-price">1 110 475 ₽</span>

          <span className="card-product-span-price">Нашли дешевле? Снизим цену!</span>

        </div>


      </div>

      <div className="card-product-right-wrap">

        <div className="card-product-info">
          
          <h4 className="card-product-name">Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h4>
          
          <span className="card-product-subtitle">Код товара: 	366666-2 </span>

          <div className="card-product-info-img">
            
            <img src={Health}/>

            <img src={Vector}/>

            <div className="card-product-info-img">
              <img src={ Star}/>
              <img src={ Star}/>
              <img src={ Star}/>
              <img src={ Star}/>
              <img src={ Star}/>

            </div>


          </div>

          <a className="card-product-info-link" href="#">Характеристики</a>
          <a className="card-product-info-link" href="#">Наличие в магазине</a>


          <div className="card-product-description">
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
