import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Tokyo from '../assets/Tokyo.jpg'
import Paris from '../assets/Paris.jpg'
import Venice from '../assets/Venice.jpg'
import India from '../assets/India.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import '../components/CSS/swiper.css'

// import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';


const Gallery = () => {
  return (
    <div className='my-14 max-w-7xl mx-auto '>
      <div className='grid grid-cols-2 items-center'>
        <div className='space-y-5'>
          <h1 className='font-bold text-4xl'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quam nisi libero, eum ipsa blanditiis consequuntur porro harum odit illum nesciunt iste atque sapiente.</p>
          <button className='bg-red-500 px-3 py-2 rounded-md text-white'>Explore</button>
        </div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><img src={India} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Tokyo} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Paris} alt="" /></SwiperSlide>
        <SwiperSlide><img src={Venice} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default Gallery
