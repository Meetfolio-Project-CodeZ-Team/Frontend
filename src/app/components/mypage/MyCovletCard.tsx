import { useState } from 'react'
import MyCovletDetail from './MyCovletDetail'

interface MyCovletCardProps {
  question: string
  answer: string
  coverLetterId: number
  keyword1: string
  keyword2: string
  jobKeyword: string
}

interface CovletCardDetail {
  question: string
  answer: string
  coverLetterId: number
  keyword1: string
  keyword2: string
  jobKeyword: string
}

const MyCovletCard = ({
  question,
  answer,
  coverLetterId,
  keyword1,
  keyword2,
  jobKeyword
}: MyCovletCardProps) => {
  
  

  const [covletCards, setCovletCards] = useState<CovletCardDetail>()
  const [isOpen, setIsOpen] = useState(false)

  console.log(covletCards)
  const fetchCovletCards = async () => {
    try {
      const response = await fetch(`/api/mypage/myCovletDetail?coverLetterId=${coverLetterId}`);
      if (!response.ok) {
        throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.');
      }
      const data = await response.json();
      if (data.result && data.result.coverLetterInfo) {
        console.log(data.result.coverLetterInfo, '상세 조회'); // 데이터 로깅
        setCovletCards(data.result.coverLetterInfo);
      } else {
        console.error('coverLetterInfo 데이터가 없습니다.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[963px] h-[223px] relative mt-[20px] "onClick={fetchCovletCards}>
      <div className="w-[963px] h-[223px] left-0 top-0 absolute">
        <div className="w-[963px] h-[223px] left-0 top-0 absolute bg-slate-400 rounded-[10px]" />
        <div className="left-[25px] top-[15px] absolute text-gray-900 text-[26px] font-semibold font-['Plus Jakarta Sans'] leading-[39px]">
          {question}
        </div>
        <div className="left-[883.60px] top-[51px] absolute text-gray-900 text-sm font-normal font-['Rubik'] leading-[30px]">
          24/01/01
        </div>
      </div>
      <div className="w-[921px] h-[72px] left-[23px] top-[85px] absolute text-gray-900 text-[15px] font-medium font-['Plus Jakarta Sans'] leading-snug">
        {answer}
        <br />
        <br />{' '}
      </div>
      {/* {isOpen && covletCards && <MyCovletDetail
        coverLetterId={covletCards?=.coverLetterId}
        question={covletCards.question}
        jobKeyword={covletCards.jobKeyword}
        keyword1={covletCards.keyword1}
        keyword2={covletCards.keyword2}
        
        // closeModal={setIsOpen(false)}
      />} */}
    </div>
  )
}
export default MyCovletCard
