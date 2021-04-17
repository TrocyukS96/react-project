import React from "react";
import s from './GoodsCard.module.scss';
import favoritesImg from "../../../assets/image/cardCatalog/favoritesImg.svg";
import saleImg from "../../../assets/image/cardCatalog/saleImg.svg";
import GoodsImg from "../../../assets/image/goods/goodsimg.png";
import cartImg from "../../../assets/image/cardCatalog/cartImg.svg";

function GoodsCard(props) {
   return (
      <div className={s.sliderCard}>
         <img className={s.saleIcon} src={saleImg} alt="sale" />
         <div className={s.getFavorite}>
            <input className={s.favoriteInput} type="checkbox" value="yes" id="like" />
            <label className={s.inputLabel} For="like"><img src={favoritesImg} alt="like-it" /></label>
         </div>

         <img src={GoodsImg} alt="product-view" className={s.goodsImg} />
         <p className={s.goodsDiscr}>{props.text}</p>
         <span className={s.goodsPrice}>{props.text2}</span>
         {/*<span >нет в наличии</span>*/}
         {/*<a href="#">Сообщить о поступлении</a>*/}
         <button className={s.bottomBtn}><img src={cartImg} alt="cart" /></button>
      </div>
   )
}

export default GoodsCard;