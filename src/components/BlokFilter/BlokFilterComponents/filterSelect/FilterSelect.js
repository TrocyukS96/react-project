import React from "react";
import './FilterSelect.css';




function FilterSelect(props) {
  return (
    <div className="filter-select-card">
      <h4>{props.text}</h4>
      <select className="filter-select" size="1">
        <option>{props.power} {props.speed}</option>
        <option>{props.power2}{props.speed2}</option>
        <option>{props.power3}{props.speed3}</option>
        <option>{props.power4}{props.speed4}</option>
        <option>{props.power5}{props.speed5}</option>
      </select>


    </div>
    
    
    
    
    
  );
}

export default FilterSelect;
