import React from "react";
import Btn from "./../btn/Btn";
import Input from "./../input/Input";

import './BlockFilter.css';
import FilterCheckbox from "./blockFilterComponents/filterCheckbox/FilterCheckbox";
import FilterLink from "./blockFilterComponents/filterLink/FilterLink";
import FilterSelect from "./blockFilterComponents/filterSelect/FilterSelect";
import FilterTitle from "./blockFilterComponents/filterTitle/FilterTitle";


function BlockFilter() {
    return (
        <div className="blok-filter">

            <div className="blok-filter-title">
                <a href="#">Параметры </a>
                <a href="#"> По марке </a>

            </div>
            
            <div className="availability">

                <FilterTitle text="Наличие"/>

                <div className="checkbox-wrap">

                    <FilterCheckbox text="В наличии"/>
                    <FilterCheckbox text="Под заказ"/>

                </div>   
            </div>

            <div className="filter-news">

                <FilterTitle text="Новинки"/>

                <div className="checkbox-wrap">

                    <FilterCheckbox text="Все"/>

                    <FilterCheckbox text="Новинки"/>

                    <FilterCheckbox text="Акции"/>

                </div> 
            </div> 

            <div className="filter-prise">
                <FilterTitle text="Цена"/>
                <input type="range"/>
            </div>

            <div className="filter-power">

                <div className="filter-power-item">
                    <FilterTitle text="Мощность"/>
                    <FilterSelect power="90" power2="130" power3="154" power4="230" power5="300" />
                </div>

                <div className="filter-power-item">
                    <FilterTitle text="Мощность двигателя, л.с."/>
                    <FilterSelect power="90" power2="130" power3="154" power4="230" power5="300" />
                </div>
                    
                <div className="filter-power-item">
                    <FilterTitle text="Макс. скорость"/>
                    <FilterSelect speed="20" speed2="40" speed3="80" />
                </div>
            </div>        
            
            <div className="filter-brand">

                <FilterTitle text="Бренд"/>

                <div className="checkbox-wrap">

                    <FilterCheckbox text="BRP"/>
                    <FilterCheckbox text="Spark 2"/>
                    <FilterCheckbox text="Spark 3"/>

                </div>

                <FilterLink/>   

            </div>
            

            <div className="filter-model">
                <FilterTitle text="Модель"/>
                <Input type="text" placeholder="Введите модель"
                
                style={{border: "1px solid #E0E0E0", width: "100%"}}/>

                <div className="checkbox-wrap">

                    <FilterCheckbox text="Sea-doo Spark 2"/>

                    <FilterCheckbox text="SeaDoo Spark 90 "/>

                    <FilterCheckbox text="SeaDoo GTI 155"/>

                    <FilterCheckbox text="SeaDoo GTR 230"/>
                </div> 

                <FilterLink/>

            </div>
        
            <div className="filter-dicounts">
            <FilterTitle text="Акции"/>
                <Btn text="Sale" 
                     style={{background: "#1C62CD", padding: "5px 10px", margin: "0 10px 0 0" }} />

                <Btn text="New" 
                     style={{background: "#F0F0F4", padding: "5px 10px", margin: "0 10px 0 0"}} />

                <Btn text="Hit" 
                     style={{background: "#F0F0F4", padding: "5px 10px", margin: "0 10px 0 0"}} />

                <Btn text="Дилер" 
                     style={{background: "#000", color: "#fff", padding: "5px 10px"}} />
            </div>

            <div className="country">

             <FilterTitle text="Страны"/>

                <div className="checkbox-wrap">

                    <FilterCheckbox text="Россия"/>

                    <FilterCheckbox text="Германия"/>

                    <FilterCheckbox text="Китай"/>

                    <FilterCheckbox text="США"/>

                </div> 

                <FilterLink/>

            </div>

            <div className="blok-filter-bottom">
                <Btn text="ВЫБРАТЬ" 
                 style={{background: "#F0F0F4", padding: "15px 85px", width: "100%"}} />

                <div className="parameters">
                    <FilterTitle text="Дополнительные параметры"
                     style={{color: "#re2F3035"}}/>
                </div>
                <Btn text="Сбросить фильтр" 
                 style={{background: "#FFF", border: "none", 
                 borderBottom: "2px solid #C4C4C4", maxWidth: "115px", color:"#C4C4C4"}} />
            </div>


        </div>
    );
}

export default BlockFilter;