import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import india from '../assets/India.jpg'
import tokyo from '../assets/Tokyo.jpg'
import venice from '../assets/Venice.jpg'
import paris from '../assets/Paris.jpg'
// import india from '../assets/India.jpg'

const Gallery = () => {
    return (
        <div className='py-20 bg-orange-50'>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-4xl font-serif font-semibold text-center mb-3'>Image Gallery</h2>
                <hr className='text-red-500 w-[150px] bg-red-500 mx-auto h-1 mb-10'></hr>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={false}
                    slidesPerView={'3'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={false}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={india} className='w-96'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={tokyo} className='w-96'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={venice} className='w-96'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={paris} className='w-96'/>
                    </SwiperSlide>
                   
                  
                </Swiper>
            </div>

        </div>
    )
}

export default Gallery
