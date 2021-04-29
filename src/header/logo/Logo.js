import React from "react";
import s from './Logo.module.scss';
import img1 from "../../assets/image/logo/img1.svg";
import img2 from "../../assets/image/logo/img2.svg";
import img3 from "../../assets/image/logo/img3.svg";
import imgTxt from "../../assets/image/logo/imgTxt.svg";

function Logo() {
    return (
        <div className={s.logo}>
            <div className={s.logoInner}>
                <img className={s.img1} src={img1} />
                <img className={s.img2} src={img2} />
                <img className={s.img3} src={img3} />
                <img className={s.imgTxt} src={imgTxt} />
            </div>
        </div>
    );
}

export default Logo;