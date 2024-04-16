'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../../common/Card'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function CardContainer() {
  return (
    <Swiper
      className="my-6"
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slideToClickedSlide={true}
      coverflowEffect={{
        rotate: 40,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, EffectCoverflow, Autoplay]}
      slidesPerView={4}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {Array(12)
        .fill('1')
        .map((_, index) => (
          <SwiperSlide key={index}>
            <Card
              experienceType={'봉사활동'}
              startDate={'2023.04'}
              endDate={'2023.06'}
              jobKeyword={'웹퍼블리셔'}
              stack={'리액트'}
              title={'IT 교육 봉사'}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  )
}
