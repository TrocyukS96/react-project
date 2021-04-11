import React from "react";

import './FilterCehkBox.css';


function FilterChecbox(props) {
    return (
      <div className="checkbox">
        <input  type="checkbox"/> <span>{props.text} </span>
  
      </div>
      
     
      
      
      
    );
  }
  
  export default FilterChecbox;