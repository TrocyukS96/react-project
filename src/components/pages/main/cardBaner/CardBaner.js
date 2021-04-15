import React from "react";
import s from "./CardBaner.module.scss";
import carOne from "../../../../assets/image/Baner/carOne.svg";
import carTwo from "../../../../assets/image/Baner/carTwo.svg";
import Btn from "../../../btn/Btn";

function CardBaner() {
    return (
        <div className= {s.baner}>
            <div className={s.banerImgWrap}>
                <img className={s.banerImg} src={carOne} alt="#" />
                <img className={s.banerImg} src={carTwo} alt="#" />
            </div>
            
            
            <p className={s.banerText}> CКИДКИ на все запчасти до 70%</p>

            <Btn text="Посмотреть Всё"
            
            style={{background: "#FFF", maxWidth: "285px", textAlign: "center", fontSize: "24px", padding: "5px 40px" }}/>

        </div>
    );
}

export default CardBaner;