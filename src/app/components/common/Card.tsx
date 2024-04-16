import AI1 from '@/app/ui/svg/ai/AI1'

interface CardProps {
  experienceType: string
  startDate: string
  endDate: string
  jobKeyword: string
  stack: string
  title: string
}

const Card = ({
  experienceType,
  startDate,
  endDate,
  jobKeyword,
  stack,
  title,
}: CardProps) => {
  return (
    <div className="relative w-[304px] h-[388px] px-[17px] pt-[13px] pb-[23px] bg-[#DEE5ED] rounded-[10px]">
      <div className="top-3 right-4 absolute">
        <div className="flex items-center justify-center w-[96px] h-[30px] bg-[#7AA9E7] text-sm font-semibold leading-[21px] rounded-[30px]">
          {experienceType}
        </div>
      </div>
      <div className="top-[50px] left-[52px] absolute">
        <AI1 />
      </div>
      <div className="absolute top-[258px] text-[15px] font-bold">
        {startDate + '~' + endDate}
      </div>
      <div className="absolute top-[282px] text-2xl font-bold leading-9">
        {title}
      </div>
      <div className="flex gap-x-[22px] absolute top-[328px] text-[16px] font-semibold leading-normal">
        <div className="w-24 h-9 px-3 bg-white rounded justify-center items-center gap-2 inline-flex">
          {jobKeyword}
        </div>
        <div className="w-24 h-9 px-3 bg-white rounded justify-center items-center gap-2 inline-flex">
          {stack}
        </div>
      </div>
    </div>
  )
}

export default Card
