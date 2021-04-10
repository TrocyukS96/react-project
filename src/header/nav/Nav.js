
import './Nav.css'
import heart from "./../../assets/image/icons/heart.svg"
import person from "./../../assets/image/icons/person.svg"
import buy from "./../../assets/image/icons/buy.svg"
import Logo from '../../components/logo/Logo'

function Nav () {
   return (
      <nav className="navigation">
         <div className="navigation-left">
            <ul className="navigation-left__list">
               <li className="navigation-left__item">
                  <a className="navigation-left__link" href="#" >Магазины</a>
               </li>
               <li className="navigation-left__item">
                  <a className="navigation-left__link" href="#" >Акции</a>
               </li>
               <li className="navigation-left__item">
                  <a className="navigation-left__link" href="#" >Доставка и оплата</a>
               </li>
            </ul>
         </div>
         <div className="navigation-right">
            <div className="adress">
               <a className="adress__link" href="#" >Москва,  ул. Науки  25</a>
            </div>
            <ul className="header__icons">
               <li className="header__icon">
                  <img className="header__icon-img" src={heart} alt="heart-icon" />
               </li>
               <li className="header__icon">
                  <img className="header__icon-img" src={person} alt="person-icon" />
               </li>
               <li className="header__icon">
                  <img className="header__icon-img" src={buy} alt="buy-icon" />
               </li>
            </ul>
         </div>
         <Logo />
      </nav>
   );
}

export default Nav;
