
import './App.css';
import Btn from './components/btn/Btn';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Logo from "./components/logo/Logo";

function App() {
  return (
    <div className="App">
      <Logo />
      <Nav />
      <Btn/>
      <Footer/>
    </div>
  );
}

export default App;
