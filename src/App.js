import s from './App.module.scss';

import Header from './header/Header';

import Main from "./pages/main/Main";
import Catalog from "./pages/catalog/Catalog";
import ProductCard from "./pages/productCatalog/ProductCard";
import Footer from './footer/Footer';
import { BrowserRouter, Route, Redirect } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={s.mainApp}>
                <div className={s.container}>
                    <Header />
                    <Route component={Main} />
                    <Route component={Catalog} />
                    <Route component={ProductCard} />
                    {/* <Redirect from='/' to='/Main' /> */}
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
