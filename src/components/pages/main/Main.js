import React from "react";

import s from './Main.module.scss';
import CardBaner from "./cardBaner/CardBaner";
import SliderBanner from "../../sliderBanner/SliderBanner";
import Stock from "../../stock/Stock";
import BlockSearch from "../../blockSearch/BlockSearch";
import CardDetails from "./cardDetails/CardDetails";
import Goods from "../../goods/Goods";



function Main() {
    return (
        <div className={s.main}>
            <div>
                <SliderBanner />
                <Stock />
            </div>
            <BlockSearch />

            <div className={s.cardDetailsInner}>
                <CardDetails text="Квадроциклы" />
                <CardDetails text="Гидроциклы" />
                <CardDetails text="Катера" />
                <CardDetails text="Снегоходы" />
                <CardDetails text="Вездеходы" />
                <CardDetails text="Двигатели" />
            </div>
            <Goods />
          <CardBaner />
          <Goods button=" " />
        </div>
    );
}

export default Main;
