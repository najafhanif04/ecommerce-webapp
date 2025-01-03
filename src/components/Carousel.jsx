import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from "../assets/images/ugg-671990.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} autoplay={{ delay: 3000 }} modules={[Navigation , Autoplay, EffectFade]} className="mySwiper">
        <SwiperSlide><img src={Slider}></img></SwiperSlide>
        <SwiperSlide><img src={Slider}></img></SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </>
  );
}
