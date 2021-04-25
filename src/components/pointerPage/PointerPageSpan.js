import React from "react";
import { NavLink } from "react-router-dom";

import s from './PointerPageSpan.module.scss';




function PointerPageSpan(props) {
  return (

    
    

      <NavLink to="/Main" className={s.pointerPageSpan} style={props.style}>{props.text}</NavLink>

      


    
    
    
    
  );
}

export default PointerPageSpan;
