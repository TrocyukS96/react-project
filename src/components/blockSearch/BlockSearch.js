
import Btn from '../btn/Btn';
import BtnSearch from './../btn/BtnSearch';
import Input from '../input/Input';
import s from'./BlockSearch.module.scss';


function BlockSearch() {
    return (
        <div className={s.blockSearch}>

            <div className={s.btnSearh}>
                <BtnSearch btnName="Поиск по номеру"/>
                <BtnSearch btnName="Поиск по марке"/>
                <BtnSearch btnName="Поиск по названию товара"/>

            </div>

           

            <form className={s.blockForm}>
                <Input type="text" placeholder="Введите марку"
                
                style={{width: "100%", height: "50px", backgroundColor: "#F0F0F4" }}/>
                
                <button className={s.Btn}>Искать</button>    

                
                
            </form>

          
        

        </div>
    );
}

export default BlockSearch;