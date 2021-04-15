import s from './App.module.scss';

import Header from './header/Header';
import Footer from './components/footer/Footer';
import Main from "./components/pages/main/Main";
import Catalog from "./components/pages/catalog/Catalog";
import ProductCard from "./components/pages/productCatalog/ProductCard";


function App() {
    return (
        <div className={s.mainApp}>
            <div className={s.container}>
                <Header />
                <Main />
                <Catalog />
                <ProductCard />
                
            </div>
            <Footer />
        </div>
    );
}

export default App
