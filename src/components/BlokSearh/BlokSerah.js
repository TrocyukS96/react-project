
import Btn from '../btn/Btn';
import BtnSearh from '../btn/BtnSearh';
import './BlokSearh.css';


function BlokSearh() {
    return (
        <div className="blok-searh">

            <BtnSearh btnName="Поиск по номеру"/>
            <BtnSearh btnName="Поиск по марке"/>
            <BtnSearh btnName="Поиск по названию товара"/>

            <form>
                
                <input type="text" placeholder="Введите марку"></input>
                <Btn/>
                
            </form>

          
        

        </div>
    );
}

export default BlokSearh;