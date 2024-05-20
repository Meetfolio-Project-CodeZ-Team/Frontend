import { successCopy } from '@/app/utils/toast'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { useModal } from '@/app/hooks/useModal';
import AnalysisSatisfaction from './AnalysisSatisfaction';

interface AnalysisData {
  analysis_id: number
  job_suitability: number
  skill_keywords: string[]
  job_keyword: string
}

interface AiAnalysisProps {
  analysisData: AnalysisData | null // Expecting this data as a prop
}



const AiAnalysis = ({ analysisData }: AiAnalysisProps) => {
  const router = useRouter()
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/user`,
      )
      const resData = await response.json()
      setUser(resData.result)
    }
    fetchData()
  }, [])

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
    <div className="w-[1000px] h-[1000px] mb-[100px] relative  mt-[30px] items-center justify-center mx-auto bg-gray-50 rounded-[15px]">
      <div className="w-[981px] h-[1000px] left-0 top-0 flex items-center justify-center mx-auto relative ">
        <div className="w-[773px] h-[52px] left-[160px] top-[101px] absolute text-black text-3xl font-bold  leading-[45px]">
          {userInfo?.memberName}님과 빅데이터의 직무 적합도는{' '}
          {analysisData?.job_suitability}%입니다.
        </div>
        <div className="left-[280px] top-[643px] absolute text-black text-2xl font-bold  leading-9">
          {userInfo?.memberName} 님은 이런 역량이 두드러져요!
        </div>
        <div className="w-[547px] h-[29px] left-[200px] top-[150px] absolute text-black text-2xl font-medium  leading-9">
          👍 조금만 더 노력하면 분명 원하는 목표에 도달할 거예요!
        </div>
        <div className="w-[180px] h-[124px] left-[511px] top-[320px] absolute text-black text-7xl font-bold  leading-[108px]">
          {analysisData?.job_suitability}%
        </div>
        <div className="w-[360px] h-[360px] left-[135px] top-[198px] absolute bg-white justify-center items-center inline-flex">
          <div className="w-[360px] h-[360px] relative">
            <div className="w-[360px] h-[360px] left-0 top-0 absolute bg-white" />
            <div className="w-[300px] h-[300px] left-[40px] top-[40px] absolute bg-blue-400 rounded-full shadow" />
            <div className="w-[300px] h-[300px] left-[40px] top-[40px] absolute bg-zinc-200 rounded-full" />
            <div className="w-[85px] h-7 left-[229px] top-[190px] absolute text-black text-xl font-bold  leading-[30px]">
              {analysisData?.job_keyword}
            </div>
          </div>
        </div>
        <div className="w-[569px] h-[202px] left-[200px] top-[713px] absolute">
          <div className="w-[569px] h-[202px] left-0 top-0 absolute">
            <div className="w-[120px] h-[120px] left-0 top-[67px] absolute bg-slate-200 rounded-full" />
            <div className="w-[88px] h-[58px] left-[16px] top-[104px] absolute text-center text-black text-lg font-bold  leading-[27px]">
              {analysisData?.skill_keywords?.[0]}
            </div>
            <div className="w-[386px] h-[202px] left-[183px] top-0 absolute">
              <div className="w-[180px] h-[180px] left-0 top-0 absolute bg-slate-600 rounded-full" />
              <div className="w-[131px] h-[58px] left-[26px] top-[70px] absolute text-center text-white text-2xl font-bold  leading-9">
                {analysisData?.skill_keywords?.[1]}
              </div>
              <div className="w-[150px] h-[150px] left-[236px] top-[52px] absolute">
                <div className="w-[150px] h-[150px] left-0 top-0 absolute bg-blue-400 rounded-full" />
                <div className="w-[83px] h-[58px] left-[36px] top-[47px] absolute text-black text-[21px] font-bold  leading-loose">
                  {analysisData?.skill_keywords?.[2]}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="left-[320px] top-[12px] absolute text-center text-blue-400 text-[35px] font-bold  leading-[52.50px]">
          AI 직무 역량 분석 결과
        </div>
        <div className="w-[870px] h-[40px] left-[82px] top-[1020px] absolute ">
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
        {analysisData && isOpen && (
        <AnalysisSatisfaction analysis_id={analysisData.analysis_id} />
      )}
      </div>
      </div>
    </div>
  )
}

export default AiAnalysis
