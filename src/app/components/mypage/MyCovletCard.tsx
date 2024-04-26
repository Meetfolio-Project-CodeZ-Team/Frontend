import { useState } from 'react'
import MyCovletDetail from './MyCovletDetail'
import { useRouter } from 'next/navigation'

interface MyCovletCardProps {
  question: string
  answer: string
  coverLetterId?: number
  createdAt: string
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

const MyCovletCard = ({
  question,
  answer,
  coverLetterId,
  createdAt,
}: MyCovletCardProps) => {
  const [covletCards, setCovletCards] = useState<CovletCardDetail>()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter();
  console.log(coverLetterId, '자소서 정보 id')
  const fetchCovletCards = () => {
    router.push(`/Mypage/myCovletDetail/${coverLetterId}`);
  }

  return (
    <div
      className="w-[963px] h-[223px] relative mt-[20px] cursor-pointer"
      onClick={fetchCovletCards}
    >
      <div className="w-[963px] h-[223px] left-0 top-0 absolute">
        <div className="w-[963px] h-[223px] left-0 top-0 absolute bg-slate-300 rounded-[10px]" />
        <div className="left-[25px] top-[15px] absolute text-gray-900 text-[26px] font-semibold font-['Plus Jakarta Sans'] leading-[39px]">
          {question}
        </div>
        <div className="left-[883.60px] top-[51px] absolute text-gray-900 text-sm font-normal leading-[30px]">
          {createdAt}
        </div>
      </div>
      <div className="w-[921px] h-[72px] left-[23px] top-[85px] absolute text-gray-900 text-[15px] font-medium font-['Plus Jakarta Sans'] leading-snug">
        {answer}
        <br />
        <br />{' '}
      </div>
      {/* {isOpen && covletCards && (
        <MyCovletDetail
          coverLetterId={coverLetterId || 0}
          question={covletCards.question}
          answer={covletCards.answer}
          shareType={covletCards.shareType}
          keyword1={''}
          keyword2={''}
          jobKeyword={''}
        />
      )} */}
    </div>
  )
}
export default MyCovletCard
