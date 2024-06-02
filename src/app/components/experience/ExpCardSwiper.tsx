'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'

interface ExpCardSwiperProps {
  cardsArr: JSX.Element[]
}

const ExpCardSwiper = ({ cardsArr }: ExpCardSwiperProps) => {
  return (
    <Swiper
      className=""
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slideToClickedSlide={true}
      coverflowEffect={{
        rotate: 40,
        stretch: 10,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, EffectCoverflow, Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      {cardsArr.map((card, index) => (
        <SwiperSlide
          className='"fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"'
          key={index}
        >
          {card}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ExpCardSwiper
