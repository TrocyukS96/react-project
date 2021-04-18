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
            <button className={s.buttonFavorit}><img src={favoritesImg} alt="favorites " /></button>
            <div className={s.cardCatalogInner}>
                <img src={cardCatalogImg} alt="item" />
                <h3 className={s.titleCardCatalog}>{props.text}</h3>
                <span className={s.costCardCatalog}>{props.text2}</span>
                {/*<span >нет в наличии</span>*/}
                {/*<a href="#">Сообщить о поступлении</a>*/}
                <button className={s.buttonCart}><img src={cartImg} alt="cart" /></button>
                {/*<img src={viewProductImg} alt="view" />*/}
            </div>
        </div>

    )
}

export default CardCatalog