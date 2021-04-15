import s from './Nav.module.scss';
import heart from "./../../assets/image/icons/heart.svg";
import person from "./../../assets/image/icons/person.svg";
import buy from "./../../assets/image/icons/buy.svg";
import Logo from '../logo/Logo';

function Nav () {
   return (
      <nav className={s.navigation}>
         <div className={s.navigationLeft}>
            <ul className={s.navigationLeftList}>
               <li className={s.navigationLeftItem}>
                  <a className={s.navigationLeftLink} href="#" >Магазины</a>
               </li>
               <li className={s.navigationLeftItem}>
                  <a className={s.navigationLeftLink} href="#" >Акции</a>
               </li>
               <li className={s.navigationLeftItem}>
                  <a className={s.navigationLeftLink} href="#" >Доставка и оплата</a>
               </li>
            </ul>
         </div>
         <div className={s.navigationRight}>
            <div className={s.adress}>
               <a className={s.adressLink} href="#" >Москва,  ул. Науки  25</a>
            </div>
            <ul className={s.headerIcons}>
               <li className={s.headerIcon}>
                  <img className={s.headerIconImg} src={heart} alt="heart-icon" />
               </li>
               <li className={s.headerIcon}>
                  <img className={s.headerIconImg} src={person} alt="person-icon" />
               </li>
               <li className={s.headerIcon}>
                  <img className={s.headerIconImg} src={buy} alt="buy-icon" />
               </li>
            </ul>
         </div>
         <Logo />
      </nav>
   );
}

export default Nav
