import React from "react";

import FilterTitle from "./../blokFilter/blockFilterComponents/filterTitle/FilterTitle";
import PointerPageSpan from "./../pointerPage/PointerPageSpan";

import BurgerLeft from "./../../assets/image/BlokInfo/burgerLeft.svg";
import BurgerRight from "./../../assets/image/BlokInfo/burgerRight.svg";
import s from'./BlockInfo.module.scss';



function BlockInfo(props) {
    return (
        <div className={s.blokInfo}>

            <div className={s.LinkWrap}>

                <PointerPageSpan text="Главная" />
        
                <PointerPageSpan text="Гидроциклы" />

            </div>
            
            <h2 className={s.title}>{props.title}</h2>
            
           

            <div className={s.blokInfoFilter}>

                <div className={s.FliterLeft}>

                    <a className={s.FliterLink}>Полноприводные</a>
                    <a className={s.FliterLink}>от 5000</a>
                    <a className={s.FliterLink}>BRP</a>
                    <a className={s.FliterLink}>еще</a>

                </div>

                <div className={s.blokInfoFliterRight}>

                    <select className={s.Select} size="1">
                        <option className={s.Option}>По популярности</option>
                        <option className={s.Option}>Random</option>
                        
                    </select>

                    <div className={s.InfoBurgers}>
                      <span className={s.BurgerLeft}><img src={BurgerLeft} alt="#" /></span>
                      <span className={s.BurgerRight}><img src={BurgerRight} alt="#" /></span>
                    </div>

                </div>
            </div>
     

            


        </div>
    );
}

export default BlockInfo;