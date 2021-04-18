import React from "react";
import s from './Stock.module.scss';
import stock from "./../../../../assets/image/stock/stock-img.svg";
import stockImgItem from "./../../../../assets/image/stock/stock-img-item.svg";


function Stock() {
    return (
        <div className={s.stock}>
            <img className={s.stockImg} src={stock} alt="stock" />
            <div className={s.stockPriceNormalWrapper}>
                <span className={s.stockPrice}>190 000</span>
                <span className={s.stockPriceNormal}> 225 000</span>
            </div>
            <div className={s.stockImgItemWrapper}>
                <img className={s.stockImgItem} src={stockImgItem} alt="item" />
                <h2>Лодочный мотор Suzuki DF9.9BRS</h2>
            </div>
            <div className={s.stockTimeAction}>
                Акция действует до 31.08.2020
            </div>
        </div>
    );
}

export default Stock;