
import Btn from '../btn/Btn';
import BtnSearh from '../btn/BtnSearh';
import Input from '../input/Input';
import './BlokSearh.css';


function BlokSearh() {
    return (
        <div className="blok-searh">

            <BtnSearh btnName="Поиск по номеру"/>
            <BtnSearh btnName="Поиск по марке"/>
            <BtnSearh btnName="Поиск по названию товара"/>

            <form>
                <Input type="text" placeholder="Введите марку"/>
                
                <Btn text="Искать"
                
                style={{background: "#1C62CD"}}  />
                
            </form>

          
        

        </div>
    );
}

export default BlokSearh;