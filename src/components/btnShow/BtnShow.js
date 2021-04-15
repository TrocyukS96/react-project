import React from "react";

import s from './BtnShow.module.scss';



function BtnShow(props) {
   return (
      <button className={s.btnShow}>{props.text}</button>
   )
}

export default BtnShow;