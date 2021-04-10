
import './Nav.css';

function Nav() {
   return (
      <nav className="menu">
         <ul className="menu-list">
            <li className="menu__item"><a className="menu__link" href="#">Квадроциклы</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Катера</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Лодки</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Вездеходы</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Снегоходы</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Двигатели</a></li>
            <li className="menu__item"><a className="menu__link" href="#">Снегоходы</a></li>
         </ul>
      </nav>
   );
}

export default Nav;
