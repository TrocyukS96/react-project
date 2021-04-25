import React from "react";

import s from './FilterRadio.module.scss';


function FilterRadio(props) {
    return (
      <div style={props.style} className={s.radioWrap}>

        <label className={s.label}>
          
          <input type="radio" className={s.radio}  name="1" /> 
          
          <span className={s.fake}></span>
          <span className={s.span}>{props.text}</span>
           
           
           
         </label>
     
       
     
        
  
      </div>

    );
  }
  
  export default FilterRadio;