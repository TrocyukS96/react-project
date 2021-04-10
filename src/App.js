import './App.css';
import Footer from './components/footer/Footer';
import Header from './header/Header';
<<<<<<< HEAD
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
=======
import Banner from './header/banner/Banner';
>>>>>>> e6f8a4625fd2aa0d0044196ff431125408feb220
import CardDetails from "./components/cardDetails/CardDetails";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <Header />
        <Banner/>
                <div className="CardDetailsContainer">
                    <CardDetails text="Квадроциклы" />
                    <CardDetails text="Гидроциклы" />
                    <CardDetails text="Катера" />
                    <CardDetails text="Снегоходы" />
                    <CardDetails text="Вездеходы" />
                    <CardDetails text="Двигатели" />
                </div>
<<<<<<< HEAD
                <Footer />
            </div>
        </div>
    );
>>>>>>> c423affba00e1438a5dc161cb72213620a2e0ae4
}

export default App;
=======
        <Footer/>
      </div>
    </div>
  );
  }
  export default App;
>>>>>>> e6f8a4625fd2aa0d0044196ff431125408feb220
