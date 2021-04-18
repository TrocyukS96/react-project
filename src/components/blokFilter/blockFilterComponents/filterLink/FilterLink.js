import React from "react";
import s from './FilterLink.module.scss';




function FilterLink(props) {
  return (
    
      <a className={s.FilterLink} style={props.style} href="#">Показать ещё </a>
    
    
    
    
  );
}

export default FilterLink;
