import React from "react";

import './BtnShow.css';



function BtnShow(props) {
   return (
      <button className="btn-show">{props.text}</button>
   )
}

export default BtnShow;