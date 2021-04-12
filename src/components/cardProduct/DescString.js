import React from "react";

import './DescString.css';




function DescString(props) {
  return (

    <div className="descString">

      <span className="descString-span">{props.text1}</span>

      <span className="descString-span">{props.text2}</span>


    </div>
    
    
    
  );
}

export default DescString;
