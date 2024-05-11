'use client'

import { useRecoilState } from 'recoil'
import { expNum, expData, modalNum } from '../../recoil/experience'
import { useRouter } from 'next/navigation'
import PrevArrow from '@/app/ui/svg/arrow/PrevArrow'
import NextArrow from '@/app/ui/svg/arrow/NextArrow'
import { useState } from 'react'

const ExpFinishModal1 = () => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [experienceData, setExperienceData] = useRecoilState(expData)
  const [pageNumber, setPageNumber] = useRecoilState(modalNum)
  const router = useRouter()

  const totalPages = 3

  const handleNextClick = () => {
    if (pageNumber < totalPages - 1) {
      setPageNumber(pageNumber + 1);
    } else {
      // 마지막 페이지에서 'Next' 클릭 시 첫 페이지로 이동
      setPageNumber(0);
    }
  };
  
  const handlePrevClick = () => {
    if (pageNumber > 0) {
      setPageNumber(pageNumber - 1);
    } else {
      // 첫 페이지에서 'Prev' 클릭 시 마지막 페이지로 이동
      setPageNumber(totalPages - 1);
    }
  };

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
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute w-full h-full justify-center items-center bg-black bg-opacity-50" />
      {/* <div className="w-[550px] h-[700px] flex flex-col justify-center items-center absolute">
          <div className="w-[550px] h-[650px] relative  bg-white rounded-[20px]" />
          <div className="w-[500px] h-[500px] left-[30px] top-[55px] overflow-y-auto scrollbar-hide absolute bg-slate-200 rounded-[20px] shadow">
            <div className="w-[350px] h-9 left-[35.77px] top-[121.55px] absolute">
              <div className="w-24 h-9 px-5 left-0 top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[76px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                  {displayKeyword(experienceData.jobKeyword)}
                </div>
              </div>
              <div className="w-[300px] h-9 px-5 left-[117px] top-0 absolute bg-white rounded justify-center items-center gap-2 inline-flex">
                <div className="w-[240px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                  {experienceData.expStacks.join(' / ')}
                </div>
              </div>
            </div>
            <div className="w-[110px] h-[30px] px-5 left-[359px] top-[34px] absolute bg-blue-400 rounded-[30px] justify-center items-center gap-2 inline-flex">
              <div className="w-[90px] h-6 text-center text-gray-900 text-base font-semibold leading-normal">
                {experienceData.experienceType}
              </div>
            </div>
            <div className="w-[400px] h-6 left-[30px] top-[68px] absolute text-start text-gray-900 text-2xl font-semibold leading-[45px]">
              {experienceData.title}
            </div>
            <div className="w-[300px] h-6 left-[31px] top-[34px] absolute text-gray-900 text-lg font-bold">
              {experienceData.startDate}~{experienceData.endDate}
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[189.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                업무 사항
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                {experienceData.task}
              </div>
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[384.55px] absolute">
              <div className="w-[118px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                경험 동기
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                {experienceData.motivation}
              </div>
            </div>
            <div className="w-[416px] h-[172px] left-[28.77px] top-[584.55px] absolute">
              <div className="w-[250px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                나의 활동 & 경험 내용
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                {experienceData.detail}
              </div>
            </div>

            <div className="w-[416px] h-[172px] left-[28.77px] top-[784.55px] absolute">
              <div className="w-[140px] h-6 left-0 top-0 absolute text-center text-gray-900 text-[25px] font-semibold leading-[37.50px]">
                결과 및 성과
              </div>
              <div className="w-[409px] h-[124px] left-[7px] top-[48px] absolute bg-white rounded-[15px]" />
              <div className="w-[361px] h-[92px] left-[30px] top-[59px] absolute text-black text-base font-medium leading-normal">
                {experienceData.advance}
              </div>
            </div>
          </div>
          <div className="w-[150.05px] h-[61.46px] left-[200px] top-[585px] absolute bg-black justify-center items-center rounded-[10px]">
            <button
              className={`w-[60.02px] h-[25.43px] left-[44.95px] top-[8px] absolute text-white  border-0 py-2 px-0 focus:outline-none rounded-[10px] text-2xl font-semibold `}
              onClick={handleButtonClick}
            >
              확인
            </button>
          </div>
        </div> */}
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
        <div className="left-[30px] top-[214px] absolute text-black text-lg font-semibold leading-[27px]">
          업무 사항{' '}
        </div>
        <div className="w-[439px] h-[140px] left-[30px] top-[248px] absolute bg-slate-100 rounded-[10px]" />
        <div className="w-[415px] h-[120px] left-[40px] top-[259px] absolute text-black text-base font-medium leading-normal">
          {experienceData.task}
        </div>
        <div className="w-[400px] h-11 left-[45px] top-[45px] absolute text-center text-gray-900 text-2xl font-semibold leading-[45px]">
          {experienceData.title}
        </div>
        <div className="px-10  left-[195px] top-[595px] absolute bg-black rounded-[30px] cursor-pointer">
          <div
            className=" text-center text-white text-[20px] font-semibold leading-[37.50px]"
            onClick={handleButtonClick}
          >
            확인
          </div>
        </div>

        <div className="left-[30px] top-[400px] absolute text-black text-lg font-semibold leading-[27px]">
          경험 동기
        </div>
        <div className="w-[439px] h-[140px] left-[30px] top-[434px] absolute bg-slate-100 rounded-[10px]" />
        <div className="w-[415px] h-[120px] left-[40px] top-[445px] absolute text-black text-base font-medium leading-normal">
          {experienceData.motivation}
        </div>
        <div className="w-[95px] h-4 left-[390px] top-[20px] absolute justify-start items-start gap-[4px] inline-flex">
          <div className="w-[80px] h-4 relative">
            <div className="w-[28px] h-[14px] left-[12px] top-0 absolute bg-blue-600 rounded-[50px]" />
            <div className="w-[14px] h-[14px] left-[48px] top-0 absolute bg-blue-400 rounded-full" />
            <div className="w-[14px] h-[14px] left-[70px] top-0 absolute bg-blue-400 rounded-full" />
          </div>
        </div>
      </div>
      <div className="w-[640px] h-[52px] left-[515px] top-[340px] absolute justify-start items-start gap-[580px] inline-flex">
        <div className="w-[26px] h-[52px] relative cursor-pointer"
        onClick={handlePrevClick}>
          <PrevArrow />
        </div>
        <div className="w-[26px] h-[52px] relative cursor-pointer"
        onClick={handleNextClick}>
          <NextArrow />
        </div>
      </div>
    </div>
  )
}

export default ExpFinishModal1

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
