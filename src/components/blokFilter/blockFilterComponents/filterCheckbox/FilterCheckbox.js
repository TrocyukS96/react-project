import React from "react";

import s from './FilterCheckbox.module.scss';


function FilterCheckbox(props) {
    return (
      <div className={s.checkbox}>
        <input  type="checkbox"/> <span>{props.text} </span>
  
      </div>

    );
  }
  
  export default FilterCheckbox;