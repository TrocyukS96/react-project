import React from "react";

import './Main.css';
import CardBaner from "./cardBaner/CardBaner";
import SliderBanner from "../../sliderBanner/SliderBanner";
import Stock from "../../stock/Stock";
import BlockSearch from "../../blockSearch/BlockSearch";
import CardDetails from "./cardDetails/CardDetails";
import Goods from "../../goods/Goods";
import AdditionalGoods from "../../additionalGoods/AdditionalGoods";


function Main() {
    return (
        <div className="main">
            <div>
                <SliderBanner />
                <Stock />
            </div>
            <BlockSearch />

            <div className="cardDetailsInner">
                <CardDetails text="Квадроциклы" />
                <CardDetails text="Гидроциклы" />
                <CardDetails text="Катера" />
                <CardDetails text="Снегоходы" />
                <CardDetails text="Вездеходы" />
                <CardDetails text="Двигатели" />
            </div>
            <Goods />
          <CardBaner />
          <AdditionalGoods />
        </div>
    );
}

export default Main;
