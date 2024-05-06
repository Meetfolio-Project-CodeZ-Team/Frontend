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
    <div className="flex gap-[218px] items-center w-full h-[39px] py-[2px] border-b border-stone-400">
      <div className="text-black text-lg font-semibold leading-snug ">
        {createdAt}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[300px] w-[150px] text-center">
        {point}
      </div>
      <div className="text-black text-lg font-normal leading-snug  text-center absolute left-[620px] w-[100px]">
        {type}
      </div>
      <div className="text-black text-lg font-normal leading-snug  text-center absolute left-[912px] w-[100px]">
        {totalPoint}
      </div>
     
    </div>
  )
}
export default PointCard
