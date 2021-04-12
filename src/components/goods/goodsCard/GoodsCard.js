import React from "react";
import './GoodsCard.css';
import favoritesImg from "../../../assets/image/cardCatalog/favoritesImg.svg";
import saleImg from "../../../assets/image/cardCatalog/saleImg.svg";
import GoodsImg from "../../../assets/image/goods/goodsimg.png";
import cartImg from "../../../assets/image/cardCatalog/cartImg.svg";

function GoodsCard(props) {
   return (
      <div className="goods__slider-card">
         <img className="goods__sale-img" src={saleImg} alt="sale" />
         <button className="goods__button-top"><img className="goods__favorite-icon" src={favoritesImg} alt="favorites " /></button>
         <img src={GoodsImg} alt="product-view" className="goods__img" />
         <p className="goods__discr">{props.text}</p>
         <span className="goods__price">{props.text2}</span>
         {/*<span >нет в наличии</span>*/}
         {/*<a href="#">Сообщить о поступлении</a>*/}
         <button className="goods__button-bottom"><img src={cartImg} alt="cart" /></button>
      </div>
   )
}

export default GoodsCard;