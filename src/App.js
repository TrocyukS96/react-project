import './App.css';
import Btn from './components/btn/Btn';
import Footer from './components/footer/Footer';


import Header from './header/Header';
import Stock from "./components/stock/Stock";
<<<<<<< HEAD
import BlokSearh from './components/BlokSearh/BlokSerah';

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <Header />
        <Stock />
        <Btn />
        <BlokSearh/>
        <Footer />
      </div>
    </div>
  );
=======
import CardDetails from "./components/cardDetails/CardDetails";

function App() {
    return (
        <div className="App">
            <div className="conteiner">
                <Header />
                <Stock />
                <Btn />
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
>>>>>>> c423affba00e1438a5dc161cb72213620a2e0ae4
}

export default App;
