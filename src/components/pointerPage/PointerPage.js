import React from "react";

import s from './PointerPage.module.scss';
import PointerPageSpan from "./PointerPageSpan";




function PointerPage() {
  return (

    <div className={s.pointerPageWrap}>

      
      <PointerPageSpan text="Главная" />
      
      <PointerPageSpan text="Гидроциклы" />

      <PointerPageSpan text="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic" />
   

    </div>
    
    
    
  );
}

export default PointerPage;
