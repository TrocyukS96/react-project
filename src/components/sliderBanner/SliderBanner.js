
import './SliderBanner.css';
import sliderImg from "./../../assets/image/slider-banner/slider-banner.png";



function SliderBanner() {
   return (
      <div className="slider-banner slider">
         <div className="slider__items">
            <div className="slider__item">
               <img className="slider-img" src={sliderImg} alt="slider-banner" />
            </div>
         </div>
      </div>
   );
}

export default SliderBanner;
