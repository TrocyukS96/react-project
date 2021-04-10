import React from "react";
import './Logo.css';
import logo from "./../../assets/image/logo/лого.svg";

function Logo() {
    return (
        <img className="logo" src={logo} alt="logo" />
    );
}

export default Logo;