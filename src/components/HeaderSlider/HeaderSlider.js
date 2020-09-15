import React from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './HeaderSlider.module.css'

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{ clickable: true }}
      autoplay
      loop={true}
    >
      <SwiperSlide >
        <img className={classes.swiper__slide} src="../../../public/images/header-slider/photo1.jpg" alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.swiper__slide} src="../../../public/images/header-slider/photo1.jpg" alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.swiper__slide} src="../../../public/images/header-slider/photo1.jpg" alt=""/>
      </SwiperSlide>
    </Swiper>
  );
};