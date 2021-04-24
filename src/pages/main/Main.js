import React from "react";

import s from './Main.module.scss';
import CardBaner from "./cardBaner/CardBaner";
import img1 from './../../assets/image/cardDetails/img1.svg';
import img2 from './../../assets/image/cardDetails/img2.svg';
import img3 from './../../assets/image/cardDetails/img3.svg';
import img4 from './../../assets/image/cardDetails/img4.svg';
import img5 from './../../assets/image/cardDetails/img5.svg';
import img6 from './../../assets/image/cardDetails/img6.png';
import BlockSearch from "../../components/blockSearch/BlockSearch";
import CardDetails from "./cardDetails/CardDetails";
import Goods from "./../../components/goods/Goods";
import Banner from "./banner/Banner";
import { BrowserRouter } from "react-router-dom";


function Main() {
    const data1 = {
        title: "Квадроциклы",
        img: img1,
        link: '/1'
    }
    const data2 = {
        title: "Гидроциклы",
        img: img2,
        link: '/../src/pages/catalog/Catalog.js'
    }
    const data3 = {
        title: "Катера",
        img: img3,
        link: '/3'
    }
    const data4 = {
        title: "Снегоходы",
        img: img4,
        link: '/4'
    }
    const data5 = {
        title: "Вездеходы",
        img: img5,
        link: '/5'
    }
    const data6 = {
        title: "Двигатели",
        img: img6,
        link: '/6'
    }
    return (
        <BrowserRouter>
            <div className={s.main}>

                <Banner />

                <BlockSearch />

                <div className={s.cardDetailsInner}>
                    <CardDetails title={data1.title} img={data1.img} link={data1.link} />
                    <CardDetails title={data2.title} img={data2.img} link={data2.link} />
                    <CardDetails title={data3.title} img={data3.img} link={data3.link} />
                    <CardDetails title={data4.title} img={data4.img} link={data4.link} />
                    <CardDetails title={data5.title} img={data5.img} link={data5.link} />
                    <CardDetails title={data6.title} img={data6.img} link={data6.link} />
                </div>
                <Goods />
                <CardBaner />
                <Goods button=" " />
            </div>
        </BrowserRouter>
    );
}

export default Main;
