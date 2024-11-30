import React from 'react'

const FeatureDestination2 = () => {
    const destinationJson = [
        {name:'Bali', img:Bali},
        {name:'Venice', img:Venice},
        {name:'Tokyo', img:Tokyo},
        {name:'India', img:India},
        {name:'Paris', img:Paris},
        {name:'Tokyo', img:Tokyo},
    ]
  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-32  ">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 font-serif">Featured Destinations</h2>
    <Swiper  slidesPerView={4}
        spaceBetween={30} navigation={true} modules={[Navigation]} className="mySwiper">
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {destinationJson.map((destination) => (
                <SwiperSlide>
                  <div key={destination.name} className="overflow-hidden border shadow-lg shadow-gray-500 rounded-lg mb-5">
                <div className="p-0">
                  <img
                    src={destination.img}
                    alt={destination.name}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48 hover:scale-110 transition-all"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">Experience the beauty and culture of {destination.name}.</p>
                    <button className='px-3 py-2 bg-red-500 rounded-md text-white'>Learn More</button>
                  </div>
                </div>
              </div></SwiperSlide>
                
              ))}
            </div>
        </Swiper>
          </div>
        </section>
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide> */}
  </>
  )
}

export default FeatureDestination2
