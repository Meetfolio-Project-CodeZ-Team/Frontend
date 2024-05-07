import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface MyCovletCardProps {
  question: string
  answer: string
  coverLetterId?: number
  createdAt: string
  index: number
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
  index,
}: MyCovletCardProps) => {
  const [covletCards, setCovletCards] = useState<CovletCardDetail>()
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  console.log(coverLetterId, '자소서 정보 id')
  const fetchCovletCards = () => {
    router.push(`/mypage/myCovletDetail/${coverLetterId}`)
  }

  return (
    <div


    className="w-[1085px] h-[220px] relative mb-[10px] cursor-pointer"
    onClick={fetchCovletCards}
  >
    <div className="w-[1085px] h-[200px] left-0 top-0 absolute">
      <div className="left-[1000px] top-[155px] absolute text-gray-900 text-sm font-normal leading-[30px]">
        {createdAt}
      </div>
      <div className="w-[1085px] h-[200px] left-0 top-0 absolute border-b border-slate-600" />
      <div className="w-[1080px] h-[39px] left-[25px] top-[15px] absolute  gap-[20px] inline-flex">
        <div className="w-[70px] h-[35px] px-0 py-0 bg-blue-400 rounded-[30px] justify-center items-center flex">
          <div className="w-[60px] text-center text-white text-xl font-semibold leading-[20px]">
            # {index}
          </div>


            </div>
          </div>
          <div className="text-gray-900 text-[24px] font-semibold leading-[35px] ">
            {question}
          </div>

        </div>
      </div>
      <div className="w-[1040px] h-[72px] left-[30px] top-[80px] absolute text-gray-900 text-[15px] font-medium leading-snug">
        {answer}
      </div>

    </div>
  )
}
export default MyCovletCard
