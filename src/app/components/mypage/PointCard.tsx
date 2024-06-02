interface PointCardProps {
  createdAt: string
  type: string
  point: number
  totalPoint: number
}

const PointCard = ({ createdAt, type, point, totalPoint }: PointCardProps) => {
  return (
    <div className="flex gap-[218px] items-center w-full h-[59px] py-[20px] border-b border-stone-400 mt-[0px]">
      <div className="text-black text-lg font-semibold leading-snug absolute left-[10px] w-[170px] text-start">
        {createdAt}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[300px] w-[150px] text-center">
        {point}
      </div>
      <div className="text-black text-lg font-normal leading-snug  text-center absolute left-[605px] w-[130px]">
        {type}
      </div>
      <div className="text-black text-lg font-normal leading-snug  text-center absolute left-[915px] w-[100px]">
        {totalPoint}
      </div>
    </div>
  )
}
export default PointCard
