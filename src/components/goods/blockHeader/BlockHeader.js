import React from "react";

import './BlockHeader.css';



function BlockHeader(props) {
   return (
      <div className="goods-header">
         <h2 className="goods__title">{props.text}</h2>
         <ul className="goods__menu">
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">запчасти</a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">моторы</a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">шины </a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">электроника</a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">инструменты</a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">аксессуары </a></li>
         </ul>
      </div>
   )
}

export default BlockHeader;