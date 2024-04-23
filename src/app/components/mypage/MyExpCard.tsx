import { useState } from 'react'
import ShowCard from '../main/ShowCard'
import MyExpCardDetail from './MyExpCardDetail'

interface MyExpCardProps {
  experienceType: string
  startDate: string
  endDate: string
  jobKeyword: onlyJobType
  stack: string
  title: string
  experienceId?: number
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
  closeModal: ()=>void
}

const MyExpCard = ({
  experienceType,
  startDate,
  endDate,
  jobKeyword,
  stack,
  title,
  experienceId,
}: MyExpCardProps) => {
  const stackArr = stack.split(',')
  console.log(stackArr)

  const [expCards, setExpCards] = useState<ExperienceCardDetail>()
  const [isOpen, setIsOpen] = useState(false)

  console.log(experienceId, '카드 정보 id')
  const fetchExpCards = async () => {
    try {
      const response = await fetch(
        `/api/mypage/myExpDetail?experienceId=${experienceId}`,
      )
      if (!response.ok) {
        throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
      }
      const data = await response.json()
      console.log(data.result.experienceInfo, '상세 조회') // 타입 에러가 발생하지 않아야 함
      setExpCards(data.result.experienceInfo)
    } catch (error) {
      console.error(error)
    }
    setIsOpen(true)
  }
  
  return (
    <div
      className="relative w-[304px] h-[388px] px-[17px] pt-[13px] pb-[23px] bg-[#DEE5ED] rounded-[10px] cursor-pointer"
      onClick={fetchExpCards}
    >
      <div className="top-3 right-4 absolute">
        <div className="flex items-center justify-center w-[96px] h-[30px] bg-[#7AA9E7] text-sm font-semibold rounded-[30px]">
          {experienceType}
        </div>
      </div>
      <div className="flex items-center w-[200px] h-[200px] justify-center top-[52px] left-[50px] absolute">
        <ShowCard JOBKEYWORD={jobKeyword} />
      </div>
      <div className="absolute top-[258px] text-[15px] font-bold">
        {startDate + '~' + endDate}
      </div>
      <div className="absolute top-[282px] text-2xl font-bold leading-9">
        {title}
      </div>
      <div className="flex gap-x-[20px] absolute top-[328px] text-[16px] font-semibold">
        <div className="flex w-20 h-9 px-3 bg-white rounded justify-center items-center gap-2">
          {jobKeyword}
        </div>
        <div className="flex w-26 h-9 px-2 text-[12px] bg-white rounded justify-center items-center gap-2">
          {stack}
        </div>
      </div>
      {isOpen && expCards && <MyExpCardDetail
        experienceId={experienceId||0}
        title={expCards.title}
        startDate={expCards.startDate}
        endDate={expCards.endDate}
        experienceType={expCards.experienceType}
        jobKeyword={expCards.jobKeyword}
        stack={expCards.stack}
        task={expCards.task}
        motivation={expCards.motivation}
        detail={expCards.detail}
        advance={expCards.advance}
        closeModal={()=>setIsOpen(false)}
      />}
    </div>
  )
}

export default MyExpCard
