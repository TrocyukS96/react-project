import React from "react";
import s from './CardCatalog.module.scss';
import cardCatalogImg from "./../../../assets/image/cardCatalog/cardCatalogImg.svg";
import favoritesImg from "./../../../assets/image/cardCatalog/favoritesImg.svg";
import saleImg from "./../../../assets/image/cardCatalog/saleImg.svg";
import cartImg from "./../../../assets/image/cardCatalog/cartImg.svg";

// import viewProductImg from "./../../assets/image/cardCatalog/viewProductImg.svg"

function CardCatalog(props) {
    return (
        <div className={s.cardCatalog}>
            <img src={saleImg} alt="sale" />
            <button><img src={favoritesImg} alt="favorites " /></button>
            <img src={cardCatalogImg} alt="item" />
            <h3>{props.text}</h3>
            <span>{props.text2}</span>
            {/*<span >нет в наличии</span>*/}
            {/*<a href="#">Сообщить о поступлении</a>*/}
            <button><img src={cartImg} alt="cart" /></button>
            {/*<img src={viewProductImg} alt="view" />*/}
        </div>

    )
}

export default CardCatalog