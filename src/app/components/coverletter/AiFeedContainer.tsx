import { useModal } from '@/app/hooks/useModal'
import { covletData } from '@/app/recoil/coverletter'
import { successCopy } from '@/app/utils/toast'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import FeedSatisfaction from './FeedSatisfaction'

interface FeedbackData {
  feedback_id: number
  feedback: string
  recommend: string[]
}

interface AiFeedContainerProps {
  feedbackData: FeedbackData | null
}

const AiFeedContainer = ({ feedbackData }: AiFeedContainerProps) => {
  const router = useRouter()
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div className="w-[931px] h-[960px] relative mt-[30px] items-center justify-center mx-auto bg-gray-50 rounded-[15px] mb-[100px]">
      <div className="w-[931px] h-[958px] left-0 top-0 flex">
        <div className="w-[854px] h-[350px] left-[42px] top-[181px] absolute text-black text-xl font-medium leading-[30px] overflow-y-auto  scrollbar-hide">
          {feedbackData?.feedback}
        </div>
      </div>
      <div className="w-[890px] h-[0px] top-[70px] absolute border  ml-[22px] border-zinc-300"></div>
      <div className="w-[910px] h-[50px]  top-[100px] absolute">
        <div className="w-[910px] h-[50px] left-0 top-0 absolute bg-gradient-to-r from-white to-blue-100 rounded-[10px]" />
        <div className="w-[228px] h-[49px] left-[358px] top-[6px] absolute text-center text-black text-2xl font-bold leading-9">
          자기소개서 첨삭 결과
        </div>
      </div>
      <div className="w-[253px] h-[49px] left-[345px] top-[18px] absolute text-center text-blue-400 text-3xl font-bold leading-[45px]">
        AI 자기소개서 피드백
      </div>

      <div className="w-[817px] h-[158px] left-[64px] top-[636px] absolute">
        <ul className="list-none space-y-2">
          {feedbackData?.recommend.map((item, index) => (
            <li
              key={index}
              className="relative pl-4 bg-blue-200 text-base px-3 py-2 rounded-[10px]"
            >
              <div className="absolute w-[25px] h-[25px] flex items-center justify-center bg-[#486283] text-white font-bold rounded-full left-[-2.5rem] top-1/2 transform -translate-y-1/2">
                {index + 1}
              </div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[910px] h-[50px]  top-[550px] absolute">
        <div className="w-[910px] h-[50px] left-0 top-0 absolute bg-gradient-to-r from-white to-blue-100 rounded-[10px]" />
        <div className="w-[228px] h-[49px] left-[358px] top-[6px] absolute text-center text-black text-2xl font-bold leading-9">
          추천 자기소개서 문항
        </div>
      </div>

      <div className="w-[870px] h-[40px] left-[82px] top-[980px] absolute">
        <button
          className="text-white  bg-stone-300 border-0 py-[15px] px-[300px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={openModal}
          type="button"
        >
          솔루션 결과 저장하기
        </button>
        {feedbackData && isOpen && (
          <FeedSatisfaction feedback_id={feedbackData.feedback_id} />
        )}
      </div>
    </div>
  )
}

export default AiFeedContainer
