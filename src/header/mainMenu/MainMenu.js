
import s from './MainMenu.module.scss'


function MainMenu() {

   const vehicles = ["Квадроциклы", "Катера", "Гидроциклы", "Лодки", "Вездеходы", "Снегоходы", "Двигатели", "Запчасти"]

   let products = vehicles.map(vehicle => (<li className={s.menuItem}><a className={s.menuLink} href="#">{vehicle}</a></li>))

   return (
      <div className={s.menu}>
         <ul className={s.list}>
            {products}
         </ul>
      </div>
   );
}

export default MainMenu;
