import SliderBanner from '../../components/sliderBanner/SliderBanner';
import Stock from '../../components/stock/Stock';
import s from './Banner.module.scss';



function Banner() {
   return (
      <div className={s.bannerBlock}>
         <SliderBanner/>
         <Stock/>
      </div>
   );
}

export default Banner