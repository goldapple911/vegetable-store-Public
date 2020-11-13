import React from 'react';

import ContentPromoItems from '../ContentPromoItems/ContentPromoItems';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';


export default (props: any) => {
  return (
    <Swiper>
      <SwiperSlide>
        <ContentPromoItems />
      </SwiperSlide>
    </Swiper>
  );
}
