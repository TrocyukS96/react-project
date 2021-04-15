import React from "react";

import s from './PointerPage.module.scss';
import PointerPageSpan from "./PointerPageSpan";




function PointerPage() {
  return (

    <div className={s.pointerPageWrap}>

      <PointerPageSpan text="Главная" style={{margin: "0 10px 0 0"}}/>
      
      <PointerPageSpan text="Гидроциклы" style={{margin: "0 10px 0 0"}}/>

      <PointerPageSpan text="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic" style={{}}/>
   

    </div>
    
    
    
  );
}

export default PointerPage;
