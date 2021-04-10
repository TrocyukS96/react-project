
import './MainMenu.css'


function MainMenu() {
   return (
      <div className="menu">
         <ul className="menu__list">
            <li className="menu__item">
               <a className="menu__link" href="#">Квадроциклы</a>
            </li>
            <li className="menu__item">
               <a className="menu__link" href="#">Катера</a>
            </li>
            <li className="menu__item">
               <a className="menu__link" href="#">Гидроциклы</a>
            </li>
            <li className="menu__item">
               <a className="menu__link" href="#">Лодки</a>
            </li>
            <li className="menu__item">
               <a className="menu__link" href="#">Вездеходы</a>
            </li>
            <li className="menu__item">
               <a className="menu__link" href="#">Снегоходы</a>
            </li>
            <li className="menu__item">
               <a className="menu__link" href="#">Двигатели</a>
            </li>
            <li className="menu__item">
               <a className="menu__link" href="#">Запчасти</a>
            </li>

         </ul>
      </div>
   );
}

export default MainMenu;
