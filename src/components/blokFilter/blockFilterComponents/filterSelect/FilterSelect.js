import React from "react";
import s from './FilterSelect.module.scss';




function FilterSelect(props) {
  return (
    <div className={s.filterSelectCard}>
      <h4>{props.text}</h4>
      <select className={s.filterSelect} size="1">
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
