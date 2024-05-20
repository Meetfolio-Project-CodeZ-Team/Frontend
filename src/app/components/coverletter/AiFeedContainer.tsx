import { useModal } from '@/app/hooks/useModal'
import { successCopy } from '@/app/utils/toast'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import FeedSatisfaction from './FeedSatisfaction'
import { useRecoilState } from 'recoil'
import { covletData } from '@/app/recoil/coverletter'

interface FeedbackData {
  feedback_id: number
  feedback: string
  recommend: string[]
}

interface AiFeedContainerProps {
  feedbackData: FeedbackData | null // Expecting this data as a prop
}

const AiFeedContainer = ({ feedbackData }: AiFeedContainerProps) => {
  const router = useRouter()
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)

  useEffect(()=>{
    window.scrollTo(0, 0)
  })

  const handleCopyText = () => {
    const textArea = document.getElementById('answer') as HTMLTextAreaElement
    if (textArea) {
      // 텍스트 영역을 선택합니다.
      textArea.select()
      textArea.setSelectionRange(0, 99999) // 모바일 기기를 위해

      // 복사 명령을 실행합니다.
      try {
        const successful = document.execCommand('copy')
        const msg = successful ? 'successful' : 'unsuccessful'
        console.log('Copy text command was ' + msg)
        successCopy()
      } catch (err) {
        console.error('Unable to copy text: ', err)
        alert('Failed to copy text.')
      }
    }
  }

  const saveSolution = () => {
    router.push('/mypage')
  }

  return (
    <div className="w-[931px] h-[1000px] relative mt-[30px] items-center justify-center mx-auto bg-gray-50 rounded-[15px] mb-[100px]">
      <div className="w-[931px] h-[958px] left-0 top-0 flex">
        <div className="w-[854px] h-[420px] left-[42px] top-[81px] absolute text-black text-xl font-medium leading-[30px] overflow-y-auto  scrollbar-hide">
          {feedbackData?.feedback}
        </div>
      </div>
      <div className="w-[183px] h-[49px] left-[373px] top-[18px] absolute text-center text-blue-400 text-3xl font-bold leading-[45px]">
        AI 피드백
      </div>
      <div className="w-[817px] h-[158px] left-[64px] top-[636px] absolute">
        <ul className="list-none space-y-2">
          {feedbackData?.recommend.map((item, index) => (
            <li
              key={index}
              className="relative pl-4 bg-blue-200 text-base px-3 py-2 rounded-[10px]"
            >
              <div className="absolute w-3.5 h-3.5 bg-slate-600 rounded-full left-[-1.75rem] top-1/2 transform -translate-y-1/2"></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-[228px] h-[49px] left-[366px] top-[579px] absolute text-center text-black text-2xl font-bold leading-9">
        추천 자기소개서 문항
      </div>
      <button
        onClick={handleCopyText}
        className="absolute  top-[518px] left-[838px] right-0 mt-1 ml-0 p-2 bg-gray-50 text-black rounded-[10px] text-sm inline-flex gap-[4px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.8"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
          />
        </svg>
      </button>
      <div className="w-[845.03px] h-[0px] left-[50.99px] top-[515.50px] absolute border-2 border-black"></div>
      <div className="w-[870px] h-[40px] left-[82px] top-[1020px] absolute">
        {/* <div className="w-[556.33px] left-[161.34px] top-[12px] absolute text-center text-slate-600 text-2xl font-semibold  leading-9">
          저장하기
        </div> */}
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
