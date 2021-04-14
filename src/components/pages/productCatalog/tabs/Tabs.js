import React from "react";
import './Tabs.css';


function  Tabs() {
    return (
        <div className="tabs">
            <a href="#"><span className="tabsText">О товаре</span></a>
            <a href="#"><span className="tabsText">Характеристики</span></a>
            <a href="#"><span className="tabsText">Отзывы</span></a>
            <a href="#"><span className="tabsText">Самовывоз</span></a>
            <a href="#"><span className="tabsText">Доставка</span></a>
            <a href="#"><span className="tabsText">Сервис</span></a>
            <a href="#"><span className="tabsText">Гарантия</span></a>
        </div>

    )
}

export default Tabs