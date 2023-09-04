'use client';
import React, { useRef, useState } from 'react';
// import classes from './Try.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Carousel.style.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
function Try() {
  const images = [
    {
      title: 'boolbnb',
      id: 1,
      img: '/progetti/boolbnb/boolbnb-1.png',
    },
    {
      title: 'whatsapp',
      id: 2,
      img: '/progetti/mono/whatsapp.png',
    },
    {
      title: 'spotify',
      id: 3,
      img: '/progetti/mono/spotify-pic.png',
    },
    {
      title: 'boolflix',
      id: 4,
      img: '/progetti/boolflix/boolflix-1.png',
    },
    {
      title: 'dc-comics',
      id: 5,
      img: '/progetti/dc-comics/dc-comics-1.png',
    },
    {
      title: 'everlead',
      id: 6,
      img: '/progetti/everlead/everlead-1.png',
    },
  ];
  return (
    <>
      <h1 className='title'>Ecco alcuni dei miei progetti </h1>
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
        {images.map((item) => (
          <SwiperSlide key={item.id}>
            <a href='/portfolio'>
              <img src={item.img} alt='foto' />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Try;
