import './App.css';
import Btn from './components/btn/Btn';
import Footer from './components/footer/Footer';


import Header from './header/Header';
import Stock from "./components/stock/Stock";
import BlokSearh from './components/BlokSearh/BlokSerah';

import CardDetails from "./components/cardDetails/CardDetails";

function App() {
    return (
        <div className="App">
            <div className="conteiner">
                <Header />
                <Stock />
                <Btn />
                <BlokSearh/>
                <div className="CardDetailsContainer">
                    <CardDetails text="Квадроциклы" />
                    <CardDetails text="Гидроциклы" />
                    <CardDetails text="Катера" />
                    <CardDetails text="Снегоходы" />
                    <CardDetails text="Вездеходы" />
                    <CardDetails text="Двигатели" />
                </div>
                
                <Footer />
            </div>
        </div>
    );
}

export default App;
