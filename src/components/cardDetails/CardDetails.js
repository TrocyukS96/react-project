import React from "react";
import './CardDetails.css';
import cardDetailsImg from './../../assets/image/cardDetails/cardDetails-img.svg';

function CardDetails(props) {
    return (
        <div>
            <div className="card-details">
                <h2 >{props.text}</h2>
                <img src={cardDetailsImg} alt="#" />
                <a href="#">Подробнее</a>
            </div>
        </div>
    );
}

export default CardDetails;