interface SavingCardProps {
    createdAt: string
    coverLetterId: number
    point: number
    totalPoint: number
  }
  
  const SavingCard = ({ createdAt, coverLetterId, point, totalPoint }: SavingCardProps) => {
    return (
      <div className="flex gap-[218px] items-center w-full h-[59px] py-[20px] border-b border-stone-400 mt-[0px]">
        <div className="text-black text-lg font-semibold leading-snug absolute left-[10px] w-[170px] text-start">
          {createdAt}
        </div>
        <div className="text-black text-lg font-normal leading-snug absolute left-[300px] w-[150px] text-center">
          {coverLetterId}
        </div>
        <div className="text-black text-lg font-normal leading-snug  text-center absolute left-[602px] w-[130px]">
          {point}
        </div>
        <div className="text-black text-lg font-normal leading-snug  text-center absolute left-[915px] w-[100px]">
          {totalPoint}
        </div>
      </div>
    )
  }
  export default SavingCard
  