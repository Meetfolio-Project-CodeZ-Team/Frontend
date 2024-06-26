'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface SatisfactionProps {
  analysis_id: number
}

const AnalysisSatisfaction = ({ analysis_id }: SatisfactionProps) => {
  const [satisfaction, setSatisfaction] = useState<number>(0)

  const router = useRouter()

  const handleSatisfaction = (value: Number) => {
    setSatisfaction(Number(value))
  }

  const checkSatisfaction = async () => {
    if (analysis_id === 0) {
     
      return
    }

    const response = await fetch(
      `/api/coverLetter/analysSatis?id=${analysis_id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          satisfaction,
        }),
      },
    )
    if (!response.ok) {
      
    }
    const responseData = await response.json()
    router.push('/mypage')
  }

  const finishFeed = () => {
    router.push('/main')
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-[442px] h-[444px] rounded-[20px] bg-white relative flex justify-center items-center">
        <div className="w-[235px] h-[49px] top-[148px] absolute text-center text-black text-xl font-bold leading-[30px]">
          AI 직무 역량 분석 결과에 대한 나의 만족도는?
        </div>
        <div className="w-[265px] h-[49px]  top-[64px] absolute text-center text-black text-3xl font-bold leading-[45px]">
          만족도 조사
        </div>
        <div className="w-[332px] h-[63.79px] left-[80px] top-[362px] absolute justify-start items-start gap-[40px] inline-flex">
          <div className="w-[122px] h-[35px] relative bg-[#DEE5ED] rounded-[20px] cursor-pointer px-6 py-1">
            <div
              className="  text-black text-[16px] font-semibold leading-[30px] justify-center items-center"
              onClick={finishFeed}
            >
              나중에 하기
            </div>
          </div>
          <div className=" h-[35px] relative bg-[#7AA9E7] rounded-[20px] cursor-pointer px-[34px] py-1">
            <button
              className=" text-white text-[16px] font-semibold leading-[30px] justify-center items-center"
              onClick={checkSatisfaction}
            >
              평가 완료
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-6 mt-[80px]">
          {[1, 2, 3, 4, 5].map((rating) => (
            <div key={rating} className="text-center">
              <button
                className="focus:outline-none"
                onClick={() => handleSatisfaction(rating)}
              >
                {satisfaction >= rating ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="container">
                      <rect
                        x="1"
                        y="1"
                        width="18"
                        height="18"
                        rx="9"
                        stroke="#0A7AFF"
                        strokeWidth="2"
                      />
                      <rect
                        id="circle"
                        x="5"
                        y="5"
                        width="10"
                        height="10"
                        rx="5"
                        fill="#0A7AFF"
                      />
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <g id="container">
                      <rect
                        x="1"
                        y="1"
                        width="18"
                        height="18"
                        rx="9"
                        stroke="#98A7B8"
                        strokeWidth="2"
                      />
                      <rect
                        id="circle"
                        x="5"
                        y="5"
                        width="10"
                        height="10"
                        rx="5"
                        fill="#98A7B8"
                      />
                    </g>
                  </svg>
                )}
              </button>
              <div className="text-sm text-gray-900 mt-1 font-semibold">
                {rating}점
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnalysisSatisfaction
