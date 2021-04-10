
import './Footer.css';

function Footer() {
  return (
    <div className="footer">

          <div>
            <p> Подпишитесь на нашу рассылку 
                и узнавайте о акция быстрее
            </p>
            
            <input type="text" placeholder="Введите ваш email"/>

            <button>Отправить</button>
          </div>

          <div>
          <h4>Информация</h4>
          <ul>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Магазины</a></li>
          </ul>
          <a href="#">Договор оферты</a>
        </div>

     <div>
       <h4>Интернет-магазин</h4>
       <ul>
         <li><a href="#">Доставка и самов</a></li>
         <li><a href="#">Оплата</a></li>
         <li><a href="#"> Возврат-обмен</a></li>
         <li><a href="#">Новости</a></li>
       </ul>
       <a href="#">Политика обработки персональных данных</a>

     </div>

     <div>
       {/* <a><img src="" alt="текст"></a>
       <a><img src="" alt="текст"></a>
       <a><img src="" alt="текст"></a>
       <a><img src="" alt="текст"></a> */}
     </div>

    </div>

    
  );
}

export default Footer;
