'use client';
import React, { useRef, useState } from 'react';
// import classes from './Try.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.style.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleArrowRight,
  faCircleArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
function Try() {
  const images = [
    {
      title: 'ciao',
      id: 1,
      img: '/progetti/boolflix-pic.png',
    },
    {
      title: 'ciao',
      id: 2,
      img: '/progetti/whatsapp.png',
    },
    {
      title: 'ciao',
      id: 3,
      img: '/progetti/spotify-pic.png',
    },
    {
      title: 'ciao',
      id: 4,
      img: '/progetti/whatsapp.png',
    },
    {
      title: 'ciao',
      id: 5,
      img: '/progetti/boolflix-pic.png',
    },
    {
      title: 'ciao',
      id: 6,
      img: '/progetti/whatsapp.png',
    },
    {
      title: 'ciao',
      id: 7,
      img: '/progetti/spotify-pic.png',
    },
    {
      title: 'ciao',
      id: 8,
      img: '/progetti/whatsapp.png',
    },
  ];
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectCoverflow, Navigation]}
        className='mySwiper'
      >
        {images.map((item, index) => (
          <SwiperSlide>
            <img src={item.img} alt='foto' key={item.id} cl />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Try;
