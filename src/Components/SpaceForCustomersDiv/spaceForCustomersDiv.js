import "../SpaceForCustomersDiv/spaceForCustomersDiv.css"
import SpaceForCustomers from "../SpaceForCustomers/spaceForCustomers"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation]);

function SpaceForCustomersDiv() {
       return (
              <div className="SpaceForCustomersDiv">
                     <Swiper spaceBetween={32} navigation={true} slidesPerView={3} centeredSlides={true} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)}>
                            <SwiperSlide><SpaceForCustomers first /></SwiperSlide>
                            <SwiperSlide><SpaceForCustomers /></SwiperSlide>
                            <SwiperSlide><SpaceForCustomers /></SwiperSlide>
                            <SwiperSlide><SpaceForCustomers /></SwiperSlide>
                            <SwiperSlide><SpaceForCustomers /></SwiperSlide>
                            <SwiperSlide><SpaceForCustomers /></SwiperSlide>
                            <SwiperSlide><SpaceForCustomers last /></SwiperSlide>
                            ...
                     </Swiper>
              </div>
       )
}

export default SpaceForCustomersDiv