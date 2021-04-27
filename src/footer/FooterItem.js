
import React from "react";


import s from './FooterItem.module.scss';


function FooterItem(props) {

  


  return (
   
       <div style={props.style} className={s.footerItem}>
          <div className={s.titleWrap}>
            <h4 className={s.title}>{props.title}</h4>
            <span  className={s.arrow}>w</span>  
          </div>
         

          <ul className={s.list}>

            <li className={s.item}><a className={s.itemLink} href="#">{props.item1}</a></li>
            <li className={s.item}><a className={s.itemLink} href="#">{props.item2}</a></li>
            <li className={s.item}><a className={s.itemLink} href="#">{props.item3}</a></li>
            <li className={s.item}><a className={s.itemLink} href="#">{props.item4}</a></li>

          </ul>
          
        </div>

      
      

     
  );
}

export default FooterItem;
