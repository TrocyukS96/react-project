import React from "react";
import s from './CardDetails.module.scss';
import cardDetailsImg from './../../../assets/image/cardDetails/cardDetails-img.svg';


function CardDetails(props) {
    return (
        <div>
            <div className={s.cardDetails}>
                <h3 >{props.text}</h3>
                <img src={cardDetailsImg} alt="#" />
                <div className={s.cardDetailsLink}><a href="#">Подробнее</a></div>

            </div>
        </div>
    );
}

export default CardDetails;