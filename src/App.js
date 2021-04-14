import './App.css';

import Header from './header/Header';
import Footer from './components/footer/Footer';
import Main from "./components/pages/main/Main";
import Catalog from "./components/pages/catalog/Catalog";
import ProductCard from "./components/pages/productCatalog/ProductCard";


function App() {
    return (
        <div className="App">
            <div className="container">
                <Header />
                <Main />
                <Catalog />
                <ProductCard />
                <Footer />
            </div>
        </div>
    );
}

export default App;
