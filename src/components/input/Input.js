import React from "react";
import './Input.css';

function Input(props) {
  return (
    <input  type={props.type} placeholder={props.placeholder} style={props.style}/>
  );
}

export default Input;
