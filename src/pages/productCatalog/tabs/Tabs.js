import React from "react";
import s from './Tabs.module.scss';


function Tabs() {
    return (
        <div className={s.tabs}>
            <a href="#"><span className={s.tabsText}>О товаре</span></a>
            <a href="#"><span className={s.tabsText}>Характеристики</span></a>
            <a href="#"><span className={s.tabsText}>Отзывы</span></a>
            <a href="#"><span className={s.tabsText}>Самовывоз</span></a>
            <a href="#"><span className={s.tabsText}>Доставка</span></a>
            <a href="#"><span className={s.tabsText}>Сервис</span></a>
            <a href="#"><span className={s.tabsText}>Гарантия</span></a>
        </div>

    );
}

export default Tabs