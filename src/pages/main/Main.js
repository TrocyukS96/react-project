import React from "react";

import s from './Main.module.scss';
import CardBaner from "./cardBaner/CardBaner";

import BlockSearch from "../../components/blockSearch/BlockSearch";
import CardDetails from "./cardDetails/CardDetails";
import Goods from "./../../components/goods/Goods";
import Banner from "./banner/Banner";



function Main() {
    return (
        <div className={s.main}>

            <Banner/>

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
