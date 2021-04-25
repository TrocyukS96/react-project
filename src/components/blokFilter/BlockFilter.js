import React from "react";
import Btn from "./../btn/Btn";
import Input from "./../input/Input";

import s from './BlockFilter.module.scss';
import FilterCheckbox from "./blockFilterComponents/filterCheckbox/FilterCheckbox";
import FilterLink from "./blockFilterComponents/filterLink/FilterLink";
import FilterRadio from "./blockFilterComponents/filterRadio/FilterRadio";
import FilterSelect from "./blockFilterComponents/filterSelect/FilterSelect";
import FilterTitle from "./blockFilterComponents/filterTitle/FilterTitle";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
      marginTop: "25px",  
      width: "100%",
    },
  });
  
  function valuetext(value) {
    return `${value}`;
  }
  

   

function BlockFilter() {

    const classes = useStyles();
    const [value, setValue] = React.useState([20, 37]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div className={s.blokFilter}>

            <div className={s.FilterTitle}>
                <ul className={s.filterList}>
                    <li><a className={s.titleLink} href="#">Параметры </a></li>
                    <li><a className={s.titleLink} href="#"> По марке </a></li>
                </ul>         

            </div>
            
            <div className={s.availability, s.component}>

                <FilterTitle text="Наличие"/>

                <div className={s.checkboxWrap}>

                    <FilterCheckbox text="В наличии"/>
                    <FilterCheckbox text="Под заказ"/>

                </div>   
            </div>

            <div className={s.filterNews, s.component}>

                <FilterTitle text="Новинки"/>

                <div className={s.checkboxWrap}>

                    <FilterRadio text="Все"/>
                    <FilterRadio text="Новинки"/>
                    <FilterRadio text="Акции"/>

                </div> 
            </div> 

            <div className={s.filterPrise, s.component}>
                <FilterTitle text="Цена"/>

                <div className={classes.root}>
                    
                    <Slider
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        getAriaValueText={valuetext}
                    />
                </div>

                <div className={s.filterPriseWrap}>
                    <div className={s.span}>
                        <span className={s.spanText}>от</span>
                        <span className={s.spanNumb}>100 000</span>
                    </div>

                    <div className={s.to}>
                        <span className={s.spanText}>до</span>
                        <span className={s.spanNumb}>500 000</span>
                    </div>


                </div>
            </div>

            <div className={s.filterPower, s.component}>

                <div className={s.filterPowerItem}>
                    <h4 className={s.powerItemTitle}>Мощность</h4>
                    <FilterSelect power="90" power2="130" power3="154" power4="230" power5="300" />
                </div>

                <div className={s.filterPowerItem}>
                    <h4 className={s.powerItemTitle}>Мощность двигателя, л.с.</h4>
                    <FilterSelect power="90" power2="130" power3="154" power4="230" power5="300" />
                </div>
                    
                <div className={s.filterPowerItem}>
                     <h4 className={s.powerItemTitle}>Макс. скорость</h4>
                    <FilterSelect speed="20" speed2="40" speed3="80" />
                </div>
            </div>        
            
            <div className={s.filterBrand, s.component}>

                <FilterTitle text="Бренд"/>

                <div className={s.checkboxWrap}>

                    <FilterCheckbox text="BRP" style={{marginRight: "90px"}}/>
                    <FilterCheckbox text="Spark 2"/>
                    <FilterCheckbox text="Spark 3" style={{marginTop: "20px"}}/>

                </div>

                <FilterLink style={{marginTop: "20px"}}/>   

            </div>
            

            <div className={s.filterModel, s.component}>
                <FilterTitle text="Модель"/>
                <Input type="text" placeholder="Введите модель"
                
                style={{border: "1px solid #E0E0E0", width: "100%", marginTop: "20px", height: "30px"}}/>

                <div className={s.checkboxWrap}>

                    <FilterCheckbox text="Sea-doo Spark 2"/>

                    <FilterCheckbox text="SeaDoo Spark 90 "/>

                    <FilterCheckbox text="SeaDoo GTI 155"/>

                    <FilterCheckbox text="SeaDoo GTR 230"/>
                </div> 

                <FilterLink/>

            </div>
        
            <div className={s.filterDicounts, s.component}>
                <FilterTitle text="Акции"/>
                
                <div className={s.btnWrap}>
                    <Btn text="Sale" 
                        style={{background: "#1C62CD", padding: "5px 10px", margin: "0 10px 0 0" }} />

                    <Btn text="New" 
                        style={{background: "#F0F0F4", padding: "5px 10px", margin: "0 10px 0 0"}} />

                    <Btn text="Hit" 
                        style={{background: "#F0F0F4", padding: "5px 10px", margin: "0 10px 0 0"}} />

                    <Btn text="Дилер" 
                        style={{background: "#000", color: "#fff", padding: "5px 10px"}} />
                </div>

            </div>

            <div className={s.country, s.component}>

             <FilterTitle text="Страны"/>

                <div className={s.checkboxWrap}>

                    <FilterCheckbox text="Россия" style={{minWidth: "95px", marginTop: "5px"}}/>

                    <FilterCheckbox text="Германия" style={{minWidth: "95px", marginTop: "5px"}}/>

                    <FilterCheckbox text="Китай" style={{minWidth: "95px", marginTop: "5px"}}/>

                    <FilterCheckbox text="США"style={{minWidth: "95px", marginTop: "5px"}}/>

                </div> 

                <FilterLink style={{marginTop: "20px"}}/>

            </div>

            <div className={s.blokFilterBottom}>
                <Btn text="ВЫБРАТЬ" 
                 style={{background: "#F0F0F4", padding: "15px 85px", width: "100%"}} />
                
                <div className={s.parametersWrap}>
                    <span className={s.parameters}>Дополнительные параметры</span>
                </div>

                <Btn text="Сбросить фильтр" 
                 style={{background: "#FFF", border: "none", 
                 borderBottom: "2px solid #C4C4C4", marginTop: "15px", color:"#C4C4C4"}} />
            </div>


        </div>
    );
}

export default BlockFilter;