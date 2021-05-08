import React from "react";
import s from './Pickup.module.scss';
import pickupSearchImg from "./../../../assets/image/pickup/pickupSearchImg.svg"
// import pickupBuyImg from "./../../../assets/image/pickup/pickupBuyImg.svg"


function Pickup() {
    return (
        <div className={s.pickupContainer}>
            <div className={s.pickupSearchRadioContainer}>
                <div className={s.pickupSearch}>
                    <span className={s.pickupSearchShop}>Магазин</span>
                    <form className={s.pickupSearchInput}>
                        <input type="text" placeholder="Введите название магазина" />
                        <button type="submit"><img className={s.searchImgButton} src={pickupSearchImg} alt="search" />
                        </button>
                    </form>
                </div>
                <div className={s.radioPickup}>
                    <div className={s.radioPickupMobile}>
                        <input name="choosePickup" type="radio" />
                        <label className={s.radioPickupOne}>Забрать сегодня</label>
                    </div>
                    <div className={s.radioPickupMobile}>
                        <input name="choosePickup" type="radio" />
                        <label className={s.radioPickupTwo}>Заберу в течении недели</label>
                    </div>
                </div>
            </div>
            <div className={s.pickupInfoBuyInner}>
                <div className={s.pickupInfoBuyGrid}>
                    <div className={s.pickupInfoBuyTitlle}>Адрес</div>
                    <div className={s.pickupInfoBuyTitlle}>Режим работы</div>
                    <div className={s.pickupInfoBuyTitlle}>Доступно</div>
                    <div className={s.pickupInfoBuyTitlle}>Количество</div>
                    <div className={s.pickupInfoBuyTitlle}> </div>
                    <div className={s.pickupInfoBuyShopAddress}>Москва, ул. Науки 25</div>
                    <div className={s.pickupSubGrid}>
                        <div className={s.pickupInfoBuyText}>пн-сб:</div>
                        <div className={s.pickupInfoBuyText}>08:00-19:00</div>
                        <div className={s.pickupInfoBuyText}>вс:</div>
                        <div className={s.pickupInfoBuyText}>09:00-17:00</div>
                    </div>
                    <div className={s.pickupInfoBuyText}>В наличии</div>
                    <div className={s.pickupInfoBuyText}>1</div>
                    <div>
                        <button className={s.pickupBuy}>КУПИТЬ</button>
                    </div>
                    <div className={s.pickupInfoBuyShopAddress}>Москва, ул. Южная 134</div>
                    <div className={s.pickupSubGrid}>
                        <div className={s.pickupInfoBuyText}>пн-сб:</div>
                        <div className={s.pickupInfoBuyText}>08:00-19:00</div>
                        <div className={s.pickupInfoBuyText}>вс:</div>
                        <div className={s.pickupInfoBuyText}>09:00-17:00</div>
                    </div>
                    <div className={s.pickupInfoBuyText}>В наличии</div>
                    <div className={s.pickupInfoBuyText}>1</div>
                    <div>
                        <button className={s.pickupBuy}>КУПИТЬ</button>
                    </div>
                    <div className={s.pickupInfoBuyShopAddress}>Санкт-Петербург,
                        ул. Красная 19
                    </div>
                    <div className={s.pickupSubGrid}>
                        <div className={s.pickupInfoBuyText}>пн-сб:</div>
                        <div className={s.pickupInfoBuyText}>08:00-19:00</div>
                        <div className={s.pickupInfoBuyText}>вс:</div>
                        <div className={s.pickupInfoBuyText}>09:00-17:00</div>
                    </div>
                    <div className={s.pickupInfoBuyText}>Нет в наличии</div>
                    <div className={s.pickupInfoBuyText}>0</div>
                    <div>
                        <button className={s.pickupBuy}>КУПИТЬ</button>
                    </div>
                    <div className={s.pickupInfoBuyShopAddress}>Киев, ул Шевченко 167</div>
                    <div className={s.pickupSubGrid}>
                        <div className={s.pickupInfoBuyText}>пн-сб:</div>
                        <div className={s.pickupInfoBuyText}>08:00-19:00</div>
                        <div className={s.pickupInfoBuyText}>вс:</div>
                        <div className={s.pickupInfoBuyText}>09:00-17:00</div>
                    </div>
                    <div className={s.pickupInfoBuyText}>Нет в наличии</div>
                    <div className={s.pickupInfoBuyText}>0</div>
                    <div>
                        <button className={s.pickupBuy}>КУПИТЬ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pickup;