import React from "react";
import './Pickup.css';
import pickupSearchImg from "../../../../assets/image/pickup/pickupSearchImg.svg"
import pickupBuyImg from "../../../../assets/image/pickup/pickupBuyImg.svg"


function Pickup() {
    return (
        <div className="pickupContainer">
            <div className="pickupSearch">
                Магазин
                <form>
                    <input type="text" placeholder="" />
                    <button type="submit"><img src={pickupSearchImg} alt="search" /></button>
                </form>
            </div>
            <div className="pickupRadioWrapper">
                <div className="radio">
                    <input  name="choosePickup" type="radio" />Забрать сегодня
                    <input  name="choosePickup" type="radio" />Заберу в течении недели
                </div>
            </div>
            <div className="pickupInfoBuy">
                <div>Адрес</div>
                <div>Режим работы</div>
                <div>Доступно</div>
                <div>Количество</div>
                <div>#</div>
                <div>Москва, ул. Науки 25</div>
                <div className="pickupSubGrid">
                    <div>пн-сб:</div>
                    <div>08:00-19:00</div>
                    <div>вс:</div>
                    <div>09:00-17:00</div>
                </div>
                <div>В наличии</div>
                <div>1</div>
                <div><button><img src={pickupBuyImg} alt="buy" /></button></div>
                <div>Москва, ул. Южная 134</div>
                <div className="pickupSubGrid">
                    <div>пн-сб:</div>
                    <div>08:00-19:00</div>
                    <div>вс:</div>
                    <div>09:00-17:00</div>
                </div>
                <div>В наличии</div>
                <div>1</div>
                <div><button><img src={pickupBuyImg} alt="buy" /></button></div>
                <div>Санкт-Петербург,
                    ул. Красная 19
                </div>
                <div className="pickupSubGrid">
                    <div>пн-сб:</div>
                    <div>08:00-19:00</div>
                    <div>вс:</div>
                    <div>09:00-17:00</div>
                </div>
                <div>Нет в наличии</div>
                <div>0</div>
                <div><button><img src={pickupBuyImg} alt="buy" /></button></div>
                <div>Киев, ул Шевченко 167</div>
                <div className="pickupSubGrid">
                    <div>пн-сб:</div>
                    <div>08:00-19:00</div>
                    <div>вс:</div>
                    <div>09:00-17:00</div>
                </div>
                <div>Нет в наличии</div>
                <div>0</div>
                <div><button><img src={pickupBuyImg} alt="buy" /></button></div>
            </div>
        </div>
    );
}

export default Pickup;