import './App.css';
import Footer from './components/footer/Footer';
import Header from './header/Header';
import BlokSearh from './components/BlokSearh/BlokSerah';
import Banner from './header/banner/Banner';
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
              <BlokSearh/>
              <Footer />
          </div>
      </div>
  );
  }

export default App;
