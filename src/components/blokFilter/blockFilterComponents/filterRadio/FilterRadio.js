import React from "react";

import s from './FilterRadio.module.scss';


function FilterRadio(props) {
    return (
      <div style={props.style} className={s.radioWrap}>

       <label for="radio" className={s.radio}> </label>
     
       <input type="radio" name="radio" value={props.value} id="radio" /> <span className={s.span}>{props.text}</span>
          
        
  
      </div>

    );
  }
  
  export default FilterRadio;