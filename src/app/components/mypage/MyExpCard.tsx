import { useState } from 'react'
import ShowCard from '../main/ShowCard'
import MyExpCardDetail from './MyExpCardDetail'
import { useRecoilState } from 'recoil'
import { modalNum } from '@/app/recoil/experience'
import MyExpDetailModal1 from './common/MyExpDetailModal1'
import MyExpDetailModal2 from './common/MyExpDetailModal2'
import MyExpDetailModal3 from './common/MyExpDetailModal3'
import { useRouter, usePathname } from 'next/navigation'

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

  const fetchExpCards = async () => {
    try {
      const response = await fetch(
        `/api/mypage/myExpDetail?experienceId=${experienceId}`,
      )
      if (!response.ok) {
        throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
      }
      const data = await response.json()
      console.log('경험분해 세부정보 조회', data.result.experienceInfo)
      setExpCards({
        ...data.result.experienceInfo,
        experienceId: experienceId, // experienceId 명시적으로 추가
      })
    } catch (error) {
      console.error(error)
    }
    setIsOpen(true)
  }
  const closeModal = () => setIsOpen(false)

  const renderModal = () => {
    if (!expCards) return null
    const modalProps = {
      ...expCards,
      experienceId: experienceId, // 명시적으로 experienceId 추가
      closeModal,
    }
    switch (pageNumber) {
      case 0:
        return <MyExpDetailModal1 {...modalProps} />
      case 1:
        return <MyExpDetailModal2 {...modalProps} />
      case 2:
        return <MyExpDetailModal3 {...modalProps} />
      default:
        return null // 기본적으로는 null을 반환하거나 첫 번째 모달을 띄울 수도 있습니다.
    }
  }

  return (
    <div
      className="relative w-[304px] h-[388px] px-[17px] pt-[13px] pb-[23px] bg-[#DEE5ED] rounded-[10px] cursor-pointer"
      onClick={fetchExpCards}
    >
      <div className="top-3 right-4 absolute">
        <div className="flex items-center justify-center w-[95px] h-[30px] bg-[#7AA9E7] text-sm font-semibold rounded-[30px] overflow-x-auto whitespace-nowrap scrollbar-hide">
          {experienceType}
        </div>
      </div>
      <div className="flex items-center w-[200px] h-[200px] justify-center top-[52px] left-[50px] absolute">
        <ShowCard JOBKEYWORD={jobKeyword} />
      </div>
      <div className="absolute top-[258px] text-[15px] font-bold">
        {startDate + '~' + endDate}
      </div>
      <div className="absolute w-[230px] top-[282px] text-2xl font-bold leading-9 overflow-x-auto whitespace-nowrap scrollbar-hide truncate">
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
