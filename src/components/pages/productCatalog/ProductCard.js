import React from "react";

import s from './ProductCard.module.scss';
import CardProduct from "../../cardProduct/CardProduct";
import DescString from "../../cardProduct/DescString";
import PointerPage from "../../pointerPage/PointerPage";
import Tabs from "./tabs/Tabs";
import Pickup from "./pickup/Pickup";
import Goods from "../../goods/Goods";



function ProductCard() {
    return (

        <div>
            <PointerPage />
            <DescString />
            <CardProduct />
            <div>
          <Tabs />
          <Pickup />
            </div>
          <div>
            <Goods/>
          </div>
        </div>



);
}

export default ProductCard;
