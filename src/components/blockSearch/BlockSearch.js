
import Btn from '../btn/Btn';
import BtnSearch from './../btn/BtnSearch';
import Input from '../input/Input';
import s from'./BlockSearch.module.scss';


function BlockSearch() {
    return (
        <div className={s.blockSearch}>

            <BtnSearch btnName="Поиск по номеру"/>
            <BtnSearch btnName="Поиск по марке"/>
            <BtnSearch btnName="Поиск по названию товара"/>

            <form>
                <Input type="text" placeholder="Введите марку"/>
                
                <Btn text="Искать"
                
                style={{background: "#1C62CD"}}  />
                
            </form>

          
        

        </div>
    );
}

export default BlockSearch;