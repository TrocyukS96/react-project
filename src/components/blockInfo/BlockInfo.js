import React from "react";

import FilterTitle from "./../blokFilter/blockFilterComponents/filterTitle/FilterTitle";

import BurgerLeft from "./../../assets/image/BlokInfo/burgerLeft.svg";
import BurgerRight from "./../../assets/image/BlokInfo/burgerRight.svg";
import s from'./BlockInfo.module.scss';



function BlockInfo() {
    return (
        <div className={s.blokInfo}>

            <div className={s.blokInfoLinkWrap}>

                <a className={s.blokInfoLink} href="#">Глвная</a>

                <a  className={s.blokInfoLink} href="#"> Гидроциклы </a>

            </div>

            <FilterTitle text="Гидроциклы"
            
                style={{fontSize: "30px"}}/>
           
            <div className={s.blokInfoFilter}>

                <div className={s.blokInfoFliterLeft}>

                    <a className={s.bloIinfoFliterLink}>Полноприводные</a>
                    <a className={s.blokInfoFliterLink}>от 5000</a>
                    <a className={s.blokInfoFliterLink}>BRP</a>
                    <a className={s.blokInfoFliterLink}>еще</a>

                </div>

                <div className={s.blokInfoFliterRight}>

                    <select className={s.blokInfoSelect} size="1">
                        <option className={s.blokInfoSelect}>По популярности</option>
                        <option className={s.blokInfoSelect}>Random</option>
                        
                    </select>

                    <div className={s.blokInfoBurger}>
                      <span className={s.blokInfoBurgerLeft}><img src={BurgerLeft} alt="#" /></span>
                      <span className={s.blokInfoBurgerRight}><img src={BurgerRight} alt="#" /></span>
                    </div>

                </div>
            </div>
     

            


        </div>
    );
}

export default BlockInfo;