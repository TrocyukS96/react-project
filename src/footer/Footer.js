
import React from "react";

import Inst from "./../assets/image/social-icons/instagram.svg";
import Vk from "./../assets/image/social-icons/vk .svg";
import Fb from "./../assets/image/social-icons/facebook .svg";
import Yt from "./../assets/image/social-icons/youtube .svg";
import s from './Footer.module.scss';
import Btn from "./../components/btn/Btn";
import Input from "../components/input/Input";
import FooterItem from "./FooterItem";

function Footer() {
  return (

    <div className={s.footer}>

      <div className ={s.container}>


        <div className={s.footerSubscribe}>

          <p className={s.footerText}> 
            Подпишитесь на нашу рассылку 
            и узнавайте о акция быстрее
          </p>

          <form className={s.form}>
            <Input type="text" placeholder="Введите ваш email" />
        

            <Btn text="Отпрвить" 
              style={{padding: "10px 15px", fontSize: "11px", }} />

          </form>

        </div>

        <FooterItem id="f1" title="Информация" item1="О компании" item2="Контакты" item3="Акции" item4="Магазины"/>

        <FooterItem id="f2" title="Интернет-магазин" item1="Доставка и самов" item2="Оплата" item3="Возврат-обмен" item4="Новости" />



        <div className={s.footerSocial}>

          <ul className={s.list}>

            <li className={s.item}>
              <a className={s.link} href="#">
                <img className={s.img} src={Inst} alt="текст"/>
              </a>
            </li>

            <li className={s.item}>
              <a className={s.link} href="#">
                <img className={s.img} src={Vk} alt="текст"/>
              </a>
            </li>

            <li className={s.item}>
              <a className={s.link} href="#">
                <img className={s.img} src={Fb} alt="текст"/>
              </a>
            </li>

            <li className={s.item}>
              <a className={s.link} href="#">
                <img className={s.img} src={Yt} alt="текст"/>
              </a>
            </li>

          </ul>  
      
        </div>


      </div>

      <div className={s.footerBottom}>
          <a className={s.footerBottomLink}>Договор оферты</a>

          <a className={s.footerBottomLink}>Политика обработки персональных данных</a>
      </div>

    </div>

    
  );
}

export default Footer;
