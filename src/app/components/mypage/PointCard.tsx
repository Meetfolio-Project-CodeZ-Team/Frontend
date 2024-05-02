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
    
      <div className='flex justify-between items-center w-full py-2'>
      <div className="text-black text-lg font-normal leading-snug">{createdAt}</div>
      <div className="text-black text-lg font-normal leading-snug">{type}</div>
      <div className="text-black text-lg font-normal leading-snug">{point}</div>
      <div className="text-black text-lg font-normal leading-snug">{totalPoint}</div>
    
      <div className="w-[962px] h-[0px] left-0 top-[39px] absolute border border-stone-300"></div>
      </div>
    
  )
}
export default PointCard
