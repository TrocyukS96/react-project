import SliderBanner from '../../components/sliderBanner/SliderBanner';
import Stock from '../../components/stock/Stock';
import './Banner.css';



function Banner() {
   return (
      <div className="banner-block">
         <SliderBanner/>
         <Stock/>
      </div>
   )
}

export default Banner;