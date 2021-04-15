import React from "react";
import s from './Input.module.scss';

function Input(props) {
  return (
    <input className={s.input}  type={props.type} placeholder={props.placeholder} style={props.style}/>
  );
}

export default Input;
