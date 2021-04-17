
import s from './MainMenu.module.scss'


function MainMenu() {
   return (
      <div className={s.menu}>
         <ul className={s.list}>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Квадроциклы</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Катера</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Гидроциклы</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Лодки</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Вездеходы</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Снегоходы</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Двигатели</a>
            </li>
            <li className={s.menuItem}>
               <a className={s.menuLink} href="#">Запчасти</a>
            </li>

         </ul>
      </div>
   );
}

export default MainMenu;
