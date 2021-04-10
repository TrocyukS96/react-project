
import './App.css';
import Btn from './components/btn/Btn';
import Footer from './components/footer/Footer';


import Header from './header/Header';
import Stock from "./components/stock/Stock";

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <Header />
        <Stock />
        <Btn />
        <Footer />
      </div>
    </div>
  );
}

export default App;
