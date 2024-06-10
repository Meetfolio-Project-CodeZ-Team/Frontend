import { modalNum } from '@/app/recoil/experience'
import { useEffect, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import ShowCard from '../main/ShowCard'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import MyExpDetailModal1 from './common/MyExpDetailModal1'
import MyExpDetailModal2 from './common/MyExpDetailModal2'
import MyExpDetailModal3 from './common/MyExpDetailModal3'
import PrevArrow from '@/app/ui/svg/arrow/PrevArrow'
import NextArrow from '@/app/ui/svg/arrow/NextArrow'

interface MyExpCardProps {
  experienceType: string
  startDate: string
  endDate: string
  jobKeyword: onlyJobType
  stack: string
  title: string
  experienceId: number
  isGuest?: boolean
}

interface ExperienceCardDetail {
  experienceId: number
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: onlyJobType
  stack: string
  task: string
  motivation: string
  detail: string
  advance: string
  closeModal: () => void
}

const MyExpCard = ({
  experienceType,
  startDate,
  endDate,
  jobKeyword,
  stack,
  title,
  experienceId,
  isGuest,
}: MyExpCardProps) => {
  const stackArr = stack.split(',')

  const [expCards, setExpCards] = useState<ExperienceCardDetail>()
  const [isOpen, setIsOpen] = useState(false)
  const [pageNumber, setPageNumber] = useRecoilState(modalNum)
  const prevRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  const swiperRef = useRef<any>(null)

  const fetchExpCards = async () => {
    try {
      const response = await fetch(
        `/api/mypage/myExpDetail?experienceId=${experienceId}`,
      )
      if (!response.ok) {
        throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
      }
      const data = await response.json()
      setExpCards({
        ...data.result.experienceInfo,
        experienceId: experienceId,
      })
      setPageNumber(0) 
      setIsOpen(true)
     
    } catch (error) {
     
    }
  }
  const closeModal = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen && swiperRef.current) {
      setTimeout(() => {
        swiperRef.current.update()
        swiperRef.current.slideTo(0, 0)
      }, 0)
    }
  }, [isOpen])

  const renderModal = () => {
    if (!expCards) return null
    const modalProps = {
      ...expCards,
      experienceId: experienceId,
      closeModal,
    }
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => setPageNumber(swiper.activeIndex)}
          initialSlide={0}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation]}
          className="w-full h-full max-w-[630px] max-h-[720px]"
        >
          <SwiperSlide>
            <MyExpDetailModal1 {...modalProps} />
          </SwiperSlide>
          <SwiperSlide>
            <MyExpDetailModal2 {...modalProps} />
          </SwiperSlide>
          <SwiperSlide>
            <MyExpDetailModal3 {...modalProps} />
          </SwiperSlide>
          <div
            ref={prevRef}
            className="swiper-button-prev swiper-button-disabled"
            style={{ color: '#FAFBFD' }}
          ></div>
          <div
            ref={nextRef}
            className="swiper-button-next"
            style={{ color: '#FAFBFD' }}
          ></div>
        </Swiper>
      </div>
    )
  }

  return (
    <div
      className="relative w-[304px] h-[388px] px-[17px] pt-[13px] pb-[23px] bg-[#DEE5ED] rounded-[10px] cursor-pointer"
      onClick={fetchExpCards}
    >
      <div className="top-3 right-4 absolute">
        <div className="flex items-center justify-center px-4 h-[30px] bg-[#7AA9E7] text-sm font-semibold rounded-[30px] overflow-x-auto whitespace-nowrap scrollbar-hide">
          {experienceType}
        </div>
      </div>
      <div className="flex items-center w-[200px] h-[200px] justify-center top-[52px] left-[50px] absolute">
        <ShowCard JOBKEYWORD={jobKeyword} />
      </div>
      <div className="absolute top-[258px] text-[15px] font-bold">
        {startDate + '~' + endDate}
      </div>
      <div className="absolute w-[270px] top-[282px] text-2xl font-bold leading-9 overflow-x-auto whitespace-nowrap scrollbar-hide truncate">
        {title}
      </div>
      <div className="flex gap-x-[20px] absolute top-[328px] text-[16px] font-semibold">
        <div className="flex w-20 h-9 px-3 bg-white rounded justify-center items-center gap-2">
          {jobKeyword}
        </div>
        <div className="flex w-[180px] h-9 px-1 bg-white rounded justify-center items-center gap-2 ">
          <div className="flex w-[170px] h-5  text-[15px] text-center rounded justify-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {stack}
          </div>
        </div>
      </div>
      {isOpen && expCards && renderModal()}
    </div>
  )
}

export default MyExpCard
