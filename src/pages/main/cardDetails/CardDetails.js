import React from "react";
import s from './CardDetails.module.scss';

import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
function CardDetails(props) {
    return (
        <BrowserRouter>
            <div>
                <div className={s.cardDetails}>
                    <h3 >{props.title}</h3>
                    <img src={props.img} alt="#" />
                    <div className={s.cardDetailsLink}><NavLink to={props.link}>Подробнее</NavLink></div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default CardDetails;