import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Like from '@/app/ui/svg/main/Like'
import Comment from '@/app/ui/svg/main/Comment'

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

const MyBoardCard = ({
  question,
  answer,
  coverLetterId,
  createdAt,
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
      className="w-[1100px] h-60 relative mt-[20px] cursor-pointer"
      onClick={fetchCovletCards}
    >
      <div className="w-[1085px] h-60 left-0 top-0 absolute bg-slate-200 rounded-[10px]" />
      <div className="w-[72px] h-[30px] px-3 left-[990px] top-[24px] absolute rounded-[30px] border border-slate-600 justify-center items-center  inline-flex">
        <div className="w-[100px] h-6 text-center text-slate-600 text-sm font-semibold leading-[22px]">
          공모전
        </div>
      </div>
      <div className="w-[47.21px] h-[50px] left-[28.33px] top-[30px] absolute rounded-full" />
      <div className="w-[105.75px] h-[18px] left-[28.33px] top-[78px] absolute text-gray-900 text-[22px] font-bold leading-[30px]">
        모집 정보
      </div>
      <div className="w-[152.96px] h-[41px] left-[28.33px] top-[18px] absolute">
        <div className="w-[105.75px] h-[18px] left-[52px] top-[5px] absolute text-slate-600 text-[15px] font-semibold leading-[30px]">
          아이디
        </div>
        <div className="w-[105.75px] h-[18px] left-[52px] top-[24px] absolute text-slate-600 text-xs font-normal leading-[30px]">
          24/01/01
        </div>
        <div className="w-[37.77px] h-10 left-0 top-[7px] absolute bg-slate-600 rounded-full" />
      </div>
      <div className="w-[1035px] h-[73px] left-[29px] top-[113px] absolute text-gray-900 text-[15px] font-medium leading-snug">
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용 내용
        내용 내용 내용 내용 내용
        <br />
        <br />{' '}
      </div>
      <div className="w-[1040px] h-[37px] left-[29px] top-[200px] justify-center items-center gap-[680px] inline-flex absolute">
        <div className="w-[250px] h-[37px] text-slate-600 text-[15px] font-medium  leading-snug">
          웹 / 모바일 / 백엔드 / 디자인 / PM / AI
        </div>
        <div className="h-[37px] justify-start items-center gap-[18px] flex">
          <div className="h-[37px] justify-between items-center flex">
            <div className="w-4 h-4 relative mr-3 mb-[22px] ">
              <Like color={'black'} size={24} />
            </div>
            <div className="w-[20px]  text-gray-900 text-lg font-normal mb-3  leading-[30px]">
              100
            </div>
          </div>
          <div className="h-[37px] justify-start items-center  flex">
            <div className="w-4 h-4 relative mr-3 mb-[18px] ">
              <Comment color={'black'} size={24} />
            </div>
            <div className="w-5 text-gray-900 text-lg font-normal mb-3 mr-3 leading-[30px]">
              100
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyBoardCard
