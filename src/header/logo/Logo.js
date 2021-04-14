import React from "react";
import './Logo.css';
import logo from "../../assets/image/logo/logo.svg";

function Logo() {
    return (
        <img className="logo" src={logo} alt="logo" />
    );
}

export default Logo;