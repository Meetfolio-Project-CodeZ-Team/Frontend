import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface PointCardProps {
  createdAt: string
  type: string
  point: number
  totalPoint: number
}

interface CovletCardDetail {
  shareType: string
  question: string
  answer: string
  coverLetterId: number
  keyword1: string
  keyword2: string
  jobKeyword: string
  // closeModal: () => void
}

const PointCard = ({ createdAt, type, point, totalPoint }: PointCardProps) => {
  const [covletCards, setCovletCards] = useState<CovletCardDetail>()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

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
