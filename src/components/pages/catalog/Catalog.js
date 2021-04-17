import React from "react";

import s from './Catalog.module.scss';
import BlockInfo from "./../../blockInfo/BlockInfo";
import BlockFilter from "./../../blokFilter/BlockFilter";
import CardCatalog from "./cardCatalog/CardCatalog";


function Catalog() {
    return (
        <div>
            <BlockInfo />
            
            <div className={s.CatalogContainer}>
                <BlockFilter />

                <div className={s.cardCatalogContainer}>
                    <CardCatalog text="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango" text2="1 049 500 ₽" />
                    <CardCatalog text="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic" text2="1 100 475 ₽" />
                    <CardCatalog text="Гидроцикл BRP SeaDoo GTR 230hp X California green " text2="1 323 700 ₽" />
                    <CardCatalog text="Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream" text2="нет в наличии" />
                    <CardCatalog text="Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal" text2="1 543 000 ₽" />
                    <CardCatalog text="Гидроцикл BRP SeaDoo Spark 60hp 2 up" text2="732 345 ₽" />
                    <CardCatalog text="Гидроцикл BRP SeaDoo Spark GTS 90hp Rental" text2="857 666 ₽" />
                    <CardCatalog text="Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue" text2="1 229 711 ₽" />
                    <CardCatalog text="Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper" text2="587 440 ₽" />
                    <CardCatalog text="Гидроцикл Spark 2-UP 900 Ho Ace Pineapple " text2="587 440 ₽" />
                    <CardCatalog text="Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla " text2="нет в наличии" />
                    <CardCatalog text="Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry" text2="нет в наличии" />
                </div>
            </div>
          
        </div>


    );
}

export default Catalog;
