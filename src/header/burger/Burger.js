import React from "react";

import s from './Burger.module.scss';


function Burger() {
   return (
      <div className={s.burger}>
         <div className={s.burgerItem}>
            <span></span>
         </div>

      </div>
   );
}

export default Burger;
