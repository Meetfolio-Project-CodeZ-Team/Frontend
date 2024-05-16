'use client'

import { useRecoilState } from 'recoil'
import { expNum, expData, modalNum } from '../../recoil/experience'
import { useRouter } from 'next/navigation'
import PrevArrow from '@/app/ui/svg/arrow/PrevArrow'
import NextArrow from '@/app/ui/svg/arrow/NextArrow'
import { useState } from 'react'
import { portNum } from '@/app/recoil/mypage'

const ExpFinishModal3 = () => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [experienceData, setExperienceData] = useRecoilState(expData)
  const [pageNumber, setPageNumber] = useRecoilState(modalNum)
  const [portfolioNumber, setPortfolioNumber] = useRecoilState(portNum)
  const router = useRouter()

  const totalPages = 3

  const handleNextClick = () => {
    if (pageNumber < totalPages - 1) {
      setPageNumber(pageNumber + 1)
    } else {
      // 마지막 페이지에서 'Next' 클릭 시 첫 페이지로 이동
      setPageNumber(0)
    }
  }

  const handlePrevClick = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1)
    } else {
      // 첫 페이지에서 'Prev' 클릭 시 마지막 페이지로 이동
      setPageNumber(totalPages - 1)
    }
  }

  const displayKeyword = (keyword: any) => {
    switch (keyword) {
      case 'BACKEND':
        return '백엔드'
      case 'AI':
        return 'AI'
      case 'WEB':
        return '웹개발'
      case 'APP':
        return '앱개발'
      case 'DESIGN':
        return '디자인'
      default:
        return keyword
    }
  }

  const goToPreviousPage = () => {
    setExperienceNumber(experienceNumber - 1)
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setExperienceData({
      ...experienceData,
      [event.target.name]: event.target.value,
    })
  }
  const handleButtonClick = () => {
    setExperienceData({
      title: '',
      startDate: '',
      endDate: '',
      experienceType: '',
      task: '',
      motivation: '',
      jobKeyword: '',
      stack: '',
      detail: '',
      advance: '',
      expStacks: [],
    })
    setPortfolioNumber(1)
    router.push('/mypage')  // '/main'으로 경로 이동
  }

  const saveExpData = async () => {
    const { expStacks, ...dataToSend } = experienceData
    console.log(experienceData.stack)

    const response = await fetch('/api/experiences', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...dataToSend,
        stack: expStacks.join(' / '),
        jobKeyword: 'AI',
      }),
    })
    console.log(experienceData.stack)
    if (!response.ok) {
      console.error('데이터 저장에 실패했습니다.')
    }
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute w-full h-full justify-center items-center bg-black bg-opacity-50" />
      <div className="w-[500px] h-[650px] relative bg-slate-200 rounded-[10px]">
        <div className="w-[436.91px] h-[73px] left-[30px] top-[120px] absolute flex-col justify-start items-start gap-3 inline-flex">
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="text-center text-gray-900 text-[16px] font-bold">
              기간 |{' '}
            </div>
            <div className="  px-5 bg-gray-900 rounded-[30px] justify-center items-center  flex">
              <div className="text-center text-white text-sm font-semibold leading-[23px]">
                {experienceData.startDate}~{experienceData.endDate}
              </div>
            </div>
          </div>
          <div className="w-[373px]  relative">
            <div className="px-5 left-[140.62px] top-0 absolute bg-gray-900 rounded-[30px] justify-center items-center gap-[5px] inline-flex">
              <div className="text-center text-white text-sm font-bold leading-[23px]">
                {experienceData.expStacks.join(' / ')}
              </div>
            </div>
            <div className="w-[142.74px]  left-0 top-0 absolute justify-start items-start gap-3 inline-flex">
              <div className="text-center text-gray-900 text-[16px] font-bold leading-[27px]">
                직무 |{' '}
              </div>
              <div className=" px-5 bg-gray-900 top-[1px] rounded-[30px] justify-center items-center gap-[5px] flex">
                <div className="text-center text-white text-sm font-semibold leading-[23px]">
                  {displayKeyword(experienceData.jobKeyword)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[640px] h-[52px] mt-[280px] ml-[-75px] justify-start items-start gap-[580px] inline-flex absolute">
          <div
            className="w-[26px] h-[52px] relative cursor-pointer"
            onClick={handlePrevClick}
          >
            <PrevArrow />
          </div>
          <div
            className="w-[26px] h-[52px] relative cursor-pointer"
            onClick={handleNextClick}
          >
            <NextArrow />
          </div>
        </div>
        <div className="w-[400px] h-11 left-[45px] top-[45px] absolute text-center text-gray-900 text-2xl font-semibold leading-[45px]">
          {experienceData.title}
        </div>
        <div className="left-[30px] top-[230px] absolute text-black text-lg font-semibold leading-[27px]">
          결과 및 성과
        </div>
        <div className="w-[439px] h-[260px] left-[30px] top-[265px] absolute bg-slate-100 rounded-[10px]" />
        <div className="w-[415px] h-[240px] left-[40px] top-[275px] absolute text-black text-base font-medium leading-normal">
          {experienceData.advance}
        </div>
        <div
          className="px-10  left-[195px] top-[595px] absolute bg-black rounded-[30px] cursor-pointer"
          onClick={handleButtonClick}
        >
          <div className=" text-center text-white text-[20px] font-semibold leading-[37.50px]">
            확인
          </div>
        </div>

        <div className="w-[95px] h-4 left-[390px] top-[20px] absolute justify-start items-start gap-[4px] inline-flex">
          <div className="w-[80px] h-4 relative">
            <div className="w-[14px] h-[14px] left-[20px] top-0 absolute bg-[#7AAAE8] rounded-full" />
            <div className="w-[14px] h-[14px] left-[40px] top-0 absolute bg-[#7AAAE8] rounded-full" />
            <div className="w-[28px] h-[14px] left-[62px] top-0 absolute bg-[#0A7AFF] rounded-[50px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpFinishModal3

const transKeyword = (keyword: string) => {
  switch (keyword) {
    case '백엔드':
      return 'BACKEND'
    case 'AI':
      return 'AI'
    case '웹개발':
      return 'WEB'
    case '앱개발':
      return 'APP'
    case '디자인':
      return 'DESIGN'
  }
}
