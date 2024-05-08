import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface PaymentCardProps {
  createdAt: string
  payment: number
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

const PaymentCard = ({
  createdAt,
  payment,
  point,
  totalPoint,
}: PaymentCardProps) => {
  const [covletCards, setCovletCards] = useState<CovletCardDetail>()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="flex gap-[218px] items-center w-full h-[39px] py-[2px] border-b border-stone-400">
      <div className="text-black text-lg font-semibold leading-snug absolute left-[10px] w-[170px] text-center">
        {createdAt}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[300px] text-center w-[150px]">
        {point}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[620px] text-center w-[100px]">
        {payment}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[912px] text-center w-[100px]">
        {totalPoint}
      </div>
    </div>
  )
}
export default PaymentCard
