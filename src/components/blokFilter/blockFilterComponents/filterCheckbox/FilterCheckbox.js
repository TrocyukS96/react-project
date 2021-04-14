import React from "react";

import './FilterCheckbox.css';


function FilterCheckbox(props) {
    return (
      <div className="checkbox">
        <input  type="checkbox"/> <span>{props.text} </span>
  
      </div>

    );
  }
  
  export default FilterCheckbox;