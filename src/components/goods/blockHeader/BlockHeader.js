import React from "react";

import s from './BlockHeader.module.scss';



function BlockHeader(props) {

   return (
      <div className={s.goodsHeader}>
         <h2 className={s.goodsTitle}>{props.text}</h2>
         <ul className={s.goodsMenu}>
            <li className={s.goodsMenuItem}><a href="#" className={s.goodsMenuLink}>запчасти</a></li>
            <li className={s.goodsMenuItem}><a href="#" className={s.goodsMenuLink}>моторы</a></li>
            <li className={s.goodsMenuItem}><a href="#" className={s.goodsMenuLink}>шины </a></li>
            <li className={s.goodsMenuItem}><a href="#" className={s.goodsMenuLink}>электроника</a></li>
            <li className={s.goodsMenuItem}><a href="#" className={s.goodsMenuLink}>инструменты</a></li>
            <li className={s.goodsMenuItem}><a href="#" className={s.goodsMenuLink}>аксессуары </a></li>
         </ul>
      </div>
   );
}

export default BlockHeader