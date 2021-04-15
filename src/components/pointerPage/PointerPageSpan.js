import React from "react";

import s from './PointerPageSpan.module.scss';




function PointerPageSpan(props) {
  return (

    

      <a href="#" className={s.pointerPageSpan} style={props.style}>{props.text}</a>

      


    
    
    
    
  );
}

export default PointerPageSpan;
