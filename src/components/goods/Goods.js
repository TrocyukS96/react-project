
import './Goods.css';



function Goods() {
   return (
      <div className="goods">
         <h2 className="goods__title">С этим товаром покупают</h2>
         <ul className="goods__menu">
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">запчасти</a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">моторы</a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">шины </a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">электроника</a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">инструменты</a></li>
            <li className="goods__menu-item"><a href="#" className="goods__menu-link">аксессуары </a></li>
         </ul>
         <div className="goods__slider">
            <div className="goods__slider-cards">
               <div className="goods__slider-card">

               </div>
            </div>
         </div>
      </div>
   )
}

export default Goods;