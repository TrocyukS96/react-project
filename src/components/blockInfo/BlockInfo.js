import React from "react";

import FilterTitle from "./../blokFilter/blockFilterComponents/filterTitle/FilterTitle";

import BurgerLeft from "./../../assets/image/BlokInfo/burgerLeft.svg";
import BurgerRight from "./../../assets/image/BlokInfo/burgerRight.svg";
import './BlockInfo.css';



function BlockInfo() {
    return (
        <div className="blok-info">

            <div className="blok-info-link-wrap">

                <a className="blok-info-link" href="#">Глвная</a>

                <a  className="blok-info-link" href="#"> Гидроциклы </a>

            </div>

            <FilterTitle text="Гидроциклы"
            
                style={{fontSize: "30px"}}/>
           
            <div className="blok-info-filter">

                <div className="blok-info-fliter-left">

                    <a className="blok-info-fliter-link">Полноприводные</a>
                    <a className="blok-info-fliter-link">от 5000</a>
                    <a className="blok-info-fliter-link">BRP</a>
                    <a className="blok-info-fliter-link">еще</a>   

                </div>

                <div className="blok-info-fliter-right">

                    <select className="blok-info-select" size="1">
                        <option className="blok-info-select">По популярности</option>
                        <option className="blok-info-select">Random</option>
                        
                    </select>

                    <div className="blok-info-burger">
                      <span className="blok-info-burger-left"><img src={BurgerLeft} alt="#" /></span>
                      <span className="blok-info-burger-right"><img src={BurgerRight} alt="#" /></span>
                    </div>

                </div>
            </div>
     

            


        </div>
    );
}

export default BlockInfo;