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
    <div className="flex justify-between items-center w-full py-[10px] border-b border-stone-400">
      <div className="text-black text-lg font-semibold leading-snug ">
        {createdAt}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[300px] text-center w-[150px]">
        {point}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[622px] text-center w-[100px]">
        {type}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[916px] text-center w-[100px]">
        {totalPoint}
      </div>
     
    </div>
  )
}
export default PointCard
