import React from "react";

import s from './DescString.module.scss';




function DescString(props) {
  return (

    <div className={s.descString}>

      <span className={s.descStringSpan}>{props.text1}</span>

      <span className={s.descStringSpan}>{props.text2}</span>


    </div>
    
    
    
  );
}

export default DescString;
