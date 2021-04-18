import s from './App.module.scss';

import Header from './header/Header';

import Main from "./pages/main/Main";
import Catalog from "./pages/catalog/Catalog";
import ProductCard from "./pages/productCatalog/ProductCard";
import Footer from './footer/Footer';


function App() {
    return (
        <div className={s.mainApp}>
            <div className={s.container}>
                <Header />
                <Main />
                <Catalog />
                <ProductCard />
                
            </div>
<Footer/>
        </div>
    );
}

export default App;
