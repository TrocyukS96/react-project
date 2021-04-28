import React from "react";
import s from "./CardBaner.module.scss";
import carOne from "../../../assets/image/Baner/carOne.svg";
import carTwo from "../../../assets/image/Baner/carTwo.svg";
import Btn from "./../../../components/btn/Btn";

function CardBaner() {
    return (
        <div className= {s.baner}>

            <div className={s.banerImgWrap}>
                <img className={s.banerImg} src={carOne} alt="#" />
                <img className={s.banerImg} src={carTwo} alt="#" />
                
            </div>
            <p className={s.banerText}> CКИДКИ на все запчасти до 70%</p>
                <button className={s.banerBtn}>Посмотреть Всё</button>
            
            
           

            

        </div>
    );
}

export default CardBaner;