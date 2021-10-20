import SpaceForCustomers from "../SpaceForCustomers/spaceForCustomers";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'
function Swiperr() {
       return (
              <Swiper slidePerPage={2.5} spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                     <SwiperSlide><SpaceForCustomers /></SwiperSlide>
                     <SwiperSlide><SpaceForCustomers /></SwiperSlide>
                     <SwiperSlide><SpaceForCustomers /></SwiperSlide>
                     <SwiperSlide><SpaceForCustomers /></SwiperSlide>
                     ...
              </Swiper>
       )
}

export default Swiperr