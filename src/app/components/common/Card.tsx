import ShowCard from '../main/ShowCard'

interface CardProps {
  experienceType: string
  startDate: string
  endDate: string
  jobKeyword: onlyJobType
  stack: string
  title: string
  experienceId?: number
}

const Card = ({
  experienceType,
  startDate,
  endDate,
  jobKeyword,
  stack,
  title,
  experienceId,
}: CardProps) => {
  const stackArr = stack.split(',')
  console.log(stackArr)

  return (
    <div className="relative w-[304px] h-[388px] px-[17px] pt-[13px] pb-[23px] bg-[#DEE5ED] rounded-[10px]">
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
    </div>
  )
}

export default Card
