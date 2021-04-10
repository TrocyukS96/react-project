import React from "react";
import './Stock.css';
import stock from "./../../assets/image/stock/stock-img.svg";
import stockImgItem from "./../../assets/image/stock/stock-img-item.svg";


function Stock() {
    return (
        <div className="stock">
            <img className="stock-img" src={stock} alt="stock" />
            <div className="stock-price-normal-wrapper">
                <span className="stock-price">190 000</span>
                <span className="stock-price-normal"> 225 000</span>
            </div>
            <div className="stock-img-item-wrapper">
                <img className="stock-img-item" src={stockImgItem} alt="item" />
                <h2>Лодочный мотор Suzuki DF9.9BRS</h2>
            </div>
            <div className="stock-time-action">
                Акция действует до 31.08.2020
            </div>
        </div>
    );
}

export default Stock;