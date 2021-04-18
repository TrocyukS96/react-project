import React from "react";

import s from './ProductCard.module.scss';
import CardProduct from "./../../components/cardProduct/CardProduct";
import DescString from "../../components/cardProduct/DescString";
import PointerPage from "./../../components/pointerPage/PointerPage";
import Tabs from "./tabs/Tabs";
import Pickup from "./pickup/Pickup";
import Goods from "./../../components/goods/Goods";



function ProductCard() {
    return (

        <div>
            <PointerPage />
            
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
