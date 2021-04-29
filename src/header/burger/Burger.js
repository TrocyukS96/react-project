import React from 'react';
import s from "./Burger.module.scss";


function Burger() {
   return (
      <div className={s.burgerMenu}>
         <div className={s.burgerInner}>
            <span></span>
         </div>
      </div>
   );
}
export default Burger;