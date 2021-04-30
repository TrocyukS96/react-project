import React from "react";

import s from './Catalog.module.scss';
import BlockInfo from "./../../components/blockInfo/BlockInfo";
import BlockFilter from "./../../components/blokFilter/BlockFilter";
import CardCatalog from "./cardCatalog/CardCatalog";
import Pagination from "./pagination/Pagination";
import img11 from "../../assets/image/cardCatalog/img11.svg";
import img12 from "../../assets/image/cardCatalog/img12.svg";
import img13 from "../../assets/image/cardCatalog/img13.svg";
import img21 from "../../assets/image/cardCatalog/img21.svg";
import img22 from "../../assets/image/cardCatalog/img22.svg";
import img23 from "../../assets/image/cardCatalog/img23.svg";
import img31 from "../../assets/image/cardCatalog/img31.svg";
import img32 from "../../assets/image/cardCatalog/img32.svg";
import img33 from "../../assets/image/cardCatalog/img33.svg";
import img41 from "../../assets/image/cardCatalog/img41.svg";
import img42 from "../../assets/image/cardCatalog/img42.svg";
import img43 from "../../assets/image/cardCatalog/img43.svg";


function Catalog() {
    const data1 = {
        title: "Гидроцикл BRP SeaDoo GTI 130hp SE Black Mango",
        img: img11,
        cost: "1 049 500 ₽"
    }
    const data2 = {
        title: "Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic",
        img: img12,
        cost: "1 100 475 ₽"
    }
    const data3 = {
        title: "Гидроцикл BRP SeaDoo GTR 230hp X California green",
        img: img13,
        cost: "1 323 700 ₽"
    }
    const data4 = {
        title: "Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream",
        img: img21,
        cost: "нет в наличии"
    }
    const data5 = {
        title: "Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal",
        img: img22,
        cost: "1 543 000 ₽"
    }
    const data6 = {
        title: "Гидроцикл BRP SeaDoo Spark 60hp 2 up",
        img: img23,
        cost: "732 345 ₽"
    }
    const data7 = {
        title: "Гидроцикл BRP SeaDoo Spark GTS 90hp Rental",
        img: img31,
        cost: "857 666 ₽"
    }
    const data8 = {
        title: "Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue",
        img: img32,
        cost: "1 229 711 ₽"
    }
    const data9 = {
        title: "Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper",
        img: img33,
        cost: "587 440 ₽"
    }
    const data10 = {
        title: "Гидроцикл Spark 2-UP 900 Ho Ace Pineapple",
        img: img41,
        cost: "587 440 ₽"
    }
    const data11 = {
        title: "Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla",
        img: img42,
        cost: "нет в наличии"
    }
    const data12 = {
        title: "Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry",
        img: img43,
        cost: "нет в наличии"
    }

    return (
        <div>

            <BlockInfo title="Гидроциклы" />

            <div className={s.CatalogContainer}>
                <BlockFilter />
                <div >
                <div className={s.cardCatalogContainer}>
                    <CardCatalog title={data1.title} img={data1.img} cost={data1.cost} />
                    <CardCatalog title={data2.title} img={data2.img} cost={data2.cost} />
                    <CardCatalog title={data3.title} img={data3.img} cost={data3.cost} />
                    <CardCatalog title={data4.title} img={data4.img} cost={data4.cost} />
                    <CardCatalog title={data5.title} img={data5.img} cost={data5.cost} />
                    <CardCatalog title={data6.title} img={data6.img} cost={data6.cost} />
                    <CardCatalog title={data7.title} img={data7.img} cost={data7.cost} />
                    <CardCatalog title={data8.title} img={data8.img} cost={data8.cost} />
                    <CardCatalog title={data9.title} img={data9.img} cost={data9.cost} />
                    <CardCatalog title={data10.title} img={data10.img} cost={data10.cost} />
                    <CardCatalog title={data11.title} img={data11.img} cost={data11.cost} />
                    <CardCatalog title={data12.title} img={data12.img} cost={data12.cost} />
                </div>
                    <div className={s.cardCatalogPaginationInner}>
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>

    )
        ;
}

export default Catalog;
