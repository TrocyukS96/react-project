import React from "react";
import "./CardBaner.css";
import carOne from "../../../../assets/image/Baner/carOne.svg";
import carTwo from "../../../../assets/image/Baner/carTwo.svg";
import Btn from "../../../btn/Btn";

function CardBaner() {
    return (
        <div className= "baner">
            <div className="baner-img-wrap">
                <img className="baner-img" src={carOne} alt="#" />
                <img className="baner-img" src={carTwo} alt="#" />
            </div>
            
            
            <p className="baner-text"> CКИДКИ на все запчасти до 70%</p>

            <Btn text="Посмотреть Всё"
            
            style={{background: "#FFF", maxWidth: "285px", textAlign: "center", fontSize: "24px", padding: "5px 40px" }}/>

        </div>
    );
}

export default CardBaner;