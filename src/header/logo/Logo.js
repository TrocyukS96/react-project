import React from "react";
import s from './Logo.module.scss';
import logo from "../../assets/image/logo/logo.svg";

function Logo() {
    return (
        <img className={s.logo} src={logo} alt="logo" />
    );
}

export default Logo