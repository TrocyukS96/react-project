import React from "react";

import s from './FilterCheckbox.module.scss';


function FilterCheckbox(props) {
    return (
      <div style={props.style} className={s.checkbox}>
        <input  type="checkbox" /> <span className={s.span}>{props.text} </span>
  
      </div>

    );
  }
  
  export default FilterCheckbox;