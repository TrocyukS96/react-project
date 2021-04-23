import React from "react";

import s from './FilterTitle.module.scss';


function FilterTitle(props) {
    return (
      <h4 style={props.style}>{props.text}</h4>
    );
  }
  
  export default FilterTitle;