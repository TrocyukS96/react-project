import './App.css';
import Footer from './components/footer/Footer';


import Header from './header/Header';
import BlokSearh from './components/BlokSearh/BlokSerah';

import CardDetails from "./components/cardDetails/CardDetails";
import CardBaner from './components/cardBaner/CardBaner';
import Banner from './header/banner/Banner';
import BlokFilter from './components/BlokFilter/BlokFilter';
import CardCatalog from "./components/cardCatalog/CardCatalog";
import BlokInfo from './components/BlokInfo/BlokInfo';
import Tabs from "./components/tabs/Tabs";
import Goods from './components/goods/Goods';
import Pickup from "./components/pickup/Pickup";
import AdditionalGoods from './components/additionalGoods/AdditionalGoods';
import CardProduct from './components/cardProduct/CardProduct';

function App() {
    return (
        <div className="App">
            <div className="conteiner">
                <Header />
                <Banner />

                <BlokSearh />
                <div className="CardDetailsContainer">
                    <CardDetails text="Квадроциклы" />
                    <CardDetails text="Гидроциклы" />
                    <CardDetails text="Катера" />
                    <CardDetails text="Снегоходы" />
                    <CardDetails text="Вездеходы" />
                    <CardDetails text="Двигатели" />
                </div>
                <Goods />
                <CardBaner />
                <AdditionalGoods />
                <Footer />


                <Header />

                <BlokInfo />
                <main className="main-two" style={{ display: "flex" }}>

                    <BlokFilter />
                    <div className="CardCatalogContainer">
                        <CardCatalog text="Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango" text2="1 049 500 ₽" />
                        <CardCatalog text="Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic" text2="1 100 475 ₽" />
                        <CardCatalog text="Гидроцикл BRP SeaDoo GTR 230hp X California green " text2="1 323 700 ₽" />
                        <CardCatalog text="Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream" text2="нет в наличии" />
                        <CardCatalog text="Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal" text2="1 543 000 ₽" />
                        <CardCatalog text="Гидроцикл BRP SeaDoo Spark 60hp 2 up" text2="732 345 ₽" />
                        <CardCatalog text="Гидроцикл BRP SeaDoo Spark GTS 90hp Rental" text2="857 666 ₽" />
                        <CardCatalog text="Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue" text2="1 229 711 ₽" />
                        <CardCatalog text="Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper" text2="587 440 ₽" />
                        <CardCatalog text="Гидроцикл Spark 2-UP 900 Ho Ace Pineapple " text2="587 440 ₽" />
                        <CardCatalog text="Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla " text2="нет в наличии" />
                        <CardCatalog text="Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry" text2="нет в наличии" />
                    </div>

                </main>
                <Footer />


                <Header />
                <CardProduct/>
                <Tabs />
                <Pickup />
                <AdditionalGoods />
                <Footer />
            </div>
        </div>
    );
}

export default App;
