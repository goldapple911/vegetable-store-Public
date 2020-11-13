import React, {useContext, useEffect, useState} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './HeaderSlider.module.css'

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './HeaderSliderHelpers.css'
import MainPageContext from "../../pages/MainPage/MainPageContext";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

export default () => {

  const sliderContext = useContext(MainPageContext);
  const currentSlides = sliderContext?.currentSlides;

  return (
    <div className={classes.slider}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}

        pagination={{ clickable: true }}
        autoplay={true}
        loop={true}
      >
        {currentSlides?.map((item, id) =>
          <SwiperSlide key={id}>
            <img className={classes.slider__item} src={item} alt=""/>
            <p className={classes.slider__text}>Дом Солнце 	&#8211; кооператив. <br/> Мы с любовью изготавливаем <br/> все наши продукты, <br/> не забывая <br/> о здоровье планеты.
            </p>
            <img className={classes.slider__logo} src={require('../../images/header-slider/icon.png')} alt="" />
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};