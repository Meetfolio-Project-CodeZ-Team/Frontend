import { useState } from 'react'
import ShowCard from '../main/ShowCard'
import ExpCardDetail from './ExpCardDetail'

interface MyExpCardProps {
  experienceType: string
  startDate: string
  endDate: string
  jobKeyword: onlyJobType
  stack: string
  title: string
  experienceId?: number
  onClick?: () => void
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

const ExpCard = ({
  experienceType,
  startDate,
  endDate,
  jobKeyword,
  stack,
  title,
  experienceId,
  onClick,
}: MyExpCardProps) => {
  const stackArr = stack.split(',')

  const [expCards, setExpCards] = useState<ExperienceCardDetail>()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className="relative w-[304px] h-[388px] px-[17px] pt-[13px] pb-[23px] mb-[20px] bg-[#DEE5ED] rounded-[10px] cursor-pointer ml-[20px]"
      onClick={onClick}
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
      <div className="absolute w-[230px] top-[282px] text-2xl font-bold leading-9 overflow-x-auto whitespace-nowrap scrollbar-hide">
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
      {isOpen && expCards && (
        <ExpCardDetail
          experienceId={experienceId || 0}
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
          closeModal={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}

export default ExpCard
