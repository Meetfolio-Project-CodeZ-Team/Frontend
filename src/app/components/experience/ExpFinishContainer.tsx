'use client'

import { useRecoilState } from 'recoil'
import { expNum, expData, modalNum } from '../../recoil/experience'
import { useRouter } from 'next/navigation'
import PrevArrow from '@/app/ui/svg/arrow/PrevArrow'
import NextArrow from '@/app/ui/svg/arrow/NextArrow'
import ExpFinishModal1 from './ExpFinishModal1'
import ExpFinishModal2 from './ExpFinishModal2'
import { useState } from 'react'
import ExpFinishModal3 from './ExpFinishModal3'

const ExpFinishContainer = () => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [experienceData, setExperienceData] = useRecoilState(expData)
  const [pageNumber, setPageNumber] = useRecoilState(modalNum)
  const router = useRouter()

  const totalPages = 3

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

  const getCurrentModal = () => {
    switch (pageNumber) {
      case 0:
        return <ExpFinishModal1 />
      case 1:
        return <ExpFinishModal2 />
      case 2:
        return <ExpFinishModal3 />
      default:
        return null // 기본적으로는 null을 반환하거나 첫 번째 모달을 띄울 수도 있습니다.
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
    router.push('/mypage/myexperience') // '/main'으로 경로 이동
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
    <div className="justify-center items-center">
      <div className="w-[1440px] h-[39px] justify-center items-center mx-auto inline-flex mt-[85px] gap-[20px]">
        <div className="w-[437px] opacity-60 text-center">
          <span className="text-gray-900 text-[26px] font-semibold  leading-[39px]">
            ¹
          </span>
          <span className="text-gray-900 text-[22px] font-semibold  leading-[33px]">
            {' '}
            경험 정보
          </span>
        </div>
        <div className="w-[437px] opacity-60 text-center">
          <span className="text-gray-900 text-[26px] font-semibold  leading-[39px]">
            ²{' '}
          </span>
          <span className="text-gray-900 text-[22px] font-semibold  leading-[33px]">
            경험 키워드
          </span>
        </div>
        <div className="w-[437px] opacity-60 text-center ">
          <span className="text-gray-900 text-[26px] font-semibold leading-[39px]">
            ³
          </span>
          <span className="text-gray-900 text-[22px] font-semibold  leading-[33px]">
            {' '}
            경험 내용
          </span>
        </div>
      </div>
      <div className="w-[1311px] h-[1.42px] relative mt-[18px] justify-center items-center mx-auto ">
        <div className="w-[1311px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[400px] h-[0px] left-[911px] top-[1.42px] absolute border-4 border-gray-800 "></div>
      </div>
      <form>
        <div className="w-[1200px] h-[438px] relative mt-[72px] justify-center items-center mx-auto">
          <div className="w-[1200px] h-[400px] left-0 top-0 absolute">
            <div className="w-[1200px] h-[385px] left-0 top-0 absolute bg-white rounded-[30px]" />
            <div className="w-[863px] h-[97px] left-[160px] top-[35px] absolute text-center text-black text-4xl font-semibold leading-[54px]">
              나의 활동과 경험 내용을 작성해주세요.
            </div>
          </div>
          <div className="w-[1029px] h-[272px] left-[53px] top-[128px] absolute">
            <div className="w-[195px] h-[29px] left-[26px] top-[3px] absolute bg-zinc-300 rounded-[20px]" />
            <div className="w-[190px] h-8 left-[29px] top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
              나의 활동 & 경험 내용
            </div>
            <div className="w-[133px] h-[23px] left-[896px] top-[190px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              100자 이내
            </div>
            <div className="w-[988px] h-[210px] left-[26px] top-[39px] absolute">
              <textarea
                value={experienceData.detail}
                onChange={handleTextareaChange}
                id="detail"
                name="detail"
                placeholder="ex) 개발 기간이 짧아서 최대한 빠르게 수행해야 했음"
                maxLength={100}
                className="w-full h-[150px] text-xl bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  resize-none outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </form>
      <form>
        <div className="w-[1200px] h-[438px] relative mt-[22px] justify-center items-center mx-auto">
          <div className="w-[1200px] h-[400px] left-0 top-0 absolute">
            <div className="w-[1200px] h-[385px] left-0 top-0 absolute bg-white rounded-[30px]" />
            <div className="w-[863px] h-[97px] left-[160px] top-[35px] absolute text-center text-black text-4xl font-semibold leading-[54px]">
              이 경험을 통해 어떤 결과와 성과를 얻었나요?
            </div>
          </div>
          <div className="w-[1029px] h-[272px] left-[53px] top-[128px] absolute">
            <div className="w-[120px] h-[29px] left-[26px] top-[3px] absolute bg-zinc-300 rounded-[20px]" />
            <div className="w-[115px] h-8 left-[29px] top-[4px] absolute text-center text-black text-base font-semibold leading-normal">
              결과 및 성과
            </div>
            <div className="w-[133px] h-[23px] left-[896px] top-[190px] absolute text-center text-black text-opacity-50 text-base font-medium leading-normal">
              100자 이내
            </div>
            <div className="w-[988px] h-[210px] left-[26px] top-[39px] absolute">
              <textarea
                value={experienceData.advance}
                onChange={handleTextareaChange}
                id="advance"
                name="advance"
                placeholder="ex) 팀 프로젝트를 통해 개발 및 협업 역량 향상되었음"
                maxLength={100}
                className="w-full h-[150px] text-xl bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  resize-none outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="w-[1440px] h-20 pb-[110px] relative  mt-[50px] justify-center items-center inline-flex gap-[50px] mx-auto">
        <button
          className="text-white  bg-stone-300 border-0 py-[20px] px-[120px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={goToPreviousPage}
        >
          이전으로
        </button>
        <button
          className="text-white  bg-stone-300 border-0 py-[20px] px-[120px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={saveExpData}
        >
          저장하기
        </button>
      </div>
      <div className="justify-center items-center">
        {/* 페이지에 따라 다른 모달 컴포넌트 렌더링 */}
        {getCurrentModal()}
      </div>
    </div>
  )
}

export default ExpFinishContainer

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
