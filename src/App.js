
import './App.css';
import Footer from './components/footer/Footer';


import Header from './header/Header';
import Banner from './header/banner/Banner';

function App() {
  return (
    <div className="App">
      <div className="conteiner">
        <Header />
        <Banner/>
        <Footer/>

      </div>
    </div>
  );
}

export default App;
