'use client'
import { Swiper, SwiperSlide } from 'swiper/react'

import Card from '../../common/Card'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
interface CardContainerProps {
  cardData: CardDataTypes[]
}
export default function CardContainer({ cardData }: CardContainerProps) {
  return (
    <Swiper
      className="my-6"
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
      slidesPerView={4}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <Card
            experienceType={card.experienceType}
            startDate={card.startDate}
            endDate={card.endDate}
            jobKeyword={card.jobKeyword}
            stack={card.stack}
            title={card.jobKeyword}
            experienceId={card.experienceId}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
