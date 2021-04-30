import React from "react";

import s from './BlockHeader.module.scss';



function BlockHeader(props) {

   const goods = ["запчасти","моторы","шины","электроника","инструменты","аксессуары"]
let prod = goods.map(item=>(<li className={s.goodsMenuItem}><a href="#" className={s.goodsMenuLink}>{item}</a></li>))
   return (
      <div className={s.goodsHeader}>
         <h2 className={s.goodsTitle}>{props.text}</h2>
         <ul className={s.goodsMenu}>
            {prod}
         </ul>
      </div>
   );
}

export default BlockHeader