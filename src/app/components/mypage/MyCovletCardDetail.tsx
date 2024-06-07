'use client'

import { useModal } from '@/app/hooks/useModal'
import { analysisData, covletData } from '@/app/recoil/coverletter'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import DeleteModal from '../admin/common/DeleteModal'
import Button from '../common/Button'
import CheckPoint from '../points/CheckPoint'
import JobAnal from './common/JobAnal'

interface CovletCardDetail {
  coverLetterId: number
  question: string
  answer: string
  keyword1?: string
  keyword2?: string
  jobKeyword?: string
  shareType: string
  isGuest: string
  correction?: string
  recommendQuestion1?: string
  recommendQuestion2?: string
  recommendQuestion3?: string
  jobSuitability?: number
  isPaid?: boolean
}

const MyCovletCardDetail = ({
  coverLetterId,
  question,
  answer,
  keyword1,
  keyword2,
  jobKeyword,
  shareType,
  isGuest,
  correction,
  recommendQuestion1,
  recommendQuestion2,
  recommendQuestion3,
  jobSuitability,
  isPaid,
}: CovletCardDetail) => {
  const router = useRouter()
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const [AnalysisData, setAnalySisData] = useRecoilState(analysisData)
  const paid = isPaid || isGuest !== 'true'

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

  const handleCopyAnswer = () => {
    const textArea = document.createElement('textarea')
    textArea.value = answer
    textArea.style.position = 'fixed'
    textArea.style.left = '-9999px'
    textArea.style.top = '-9999px'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      alert('Text copied to clipboard!')
    } catch (err) {
      alert('Failed to copy text.')
    }

    document.body.removeChild(textArea)
  }

  const jobSuitabilityPercentage = (AnalysisData?.jobSuitability ?? 0) * 100

  const roundedPercentage = Math.round(jobSuitabilityPercentage * 100) / 100

  const percentage = Math.ceil(roundedPercentage)

  const JobSuitability =
    Number(percentage) > 95
      ? Number(percentage) - 5
      : percentage
  console.log(jobSuitability)

  const onEditClick = () => {
    setCoverLetterData({
      coverLetterId,
      question,
      answer,
      keyword1,
      keyword2,
      jobKeyword,
      shareType,
    })

    router.push(`/edit-coverletter/${coverLetterId}`)
  }

  const deleteCov = async (coverLetterId: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myCovlet/delete?coverLetterId=${coverLetterId}`,
        {
          method: 'DELETE',
        },
      )

      if (res.ok) {
        router.push(`/mypage`)
      } else {
        const errorData = await res.json()
        console.error('Error details:', errorData)
      }
    } catch (error) {
      console.error('Network or other error:', error)
    }
  }
  const hasFeedback =
    correction || recommendQuestion1 || recommendQuestion2 || recommendQuestion3

  const hasAnalysis = AnalysisData?.jobSuitability

  useEffect(() => {
    const shouldReload = localStorage.getItem('reloaded') !== 'true'
    if (shouldReload) {
      localStorage.setItem('reloaded', 'true')
      window.location.reload()
    } else {
      localStorage.removeItem('reloaded')
    }
  }, [coverLetterId])

  if (hasFeedback && !hasAnalysis) {
    return (
      <div className="w-full h-[1825px] relative">
        <div className="w-full h-[1825px] left-0 top-0 absolute">
          <div className="w-full h-full left-0 top-0 absolute bg-white " />
          <div className="w-[1090px] h-[440px] left-[60px] top-[222px] absolute border-2 border-gray-300 rounded-[15px] overflow-y-auto  scrollbar-hide">
            <div
              className={`w-[1020px] h-[405px] left-[30px] top-[18px] absolute text-black text-xl font-medium leading-[30px] overflow-y-auto  scrollbar-hide  ${!paid && 'blur'} whitespace-pre-wrap overflow-y-auto scrollbar-hide`}
            >
              {answer}
            </div>
          </div>
          <button
            onClick={handleCopyAnswer}
            className=" bg-white text-black rounded absolute left-[1110px] top-[670px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-[1090px] h-[965px] left-[60px] top-[765px] absolute border-2 border-gray-300 rounded-[15px] ${!paid && 'blur'} `}
        >
          <div className="w-[260.26px] h-[49px] left-[415px] top-[18px] absolute text-center text-blue-400 text-3xl font-bold leading-[45px]">
            AI 자기소개서 피드백
          </div>
          <div className="w-[1040px] h-[0px] border mt-[75px] ml-[22px] border-zinc-300"></div>
          <div className="w-[1040px] h-[50px] mt-[30px] relative">
            <div className="w-[1040px] h-[50px] left-0 top-0 absolute bg-gradient-to-r from-white to-blue-100 rounded-[10px]" />
            <div className="w-[228px] h-[49px] left-[432px] top-[6px] absolute text-center text-black text-2xl font-bold leading-9">
              자기소개서 첨삭 결과
            </div>
          </div>
          <div className="w-[1090px] h-[800px] left-0 top-0 absolute">
            <div className="w-[1000px] h-[395px] left-[46.42px] top-[190px] absolute text-black text-xl font-medium leading-[30px] overflow-y-auto  scrollbar-hide">
              {correction}
            </div>
          </div>
          <div className="w-[1003px] left-[37px] top-[655px] absolute">
            <div className="space-y-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="w-[25px] h-[25px] relative">
                  <div className="w-[25px] h-[25px] left-0 top-0 absolute bg-[#486283] rounded-full" />
                  <div className="w-[25px] h-[25px] left-[0px] top-[0px] absolute text-center text-white text-base font-bold font-['Plus Jakarta Sans'] leading-normal">
                    1
                  </div>
                </div>
                <div className="bg-blue-200 rounded-lg px-4 py-2 w-full">
                  <p className="text-black text-base font-medium whitespace-pre-wrap">
                    {recommendQuestion1}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-[25px] h-[25px] relative">
                  <div className="w-[25px] h-[25px] left-0 top-0 absolute bg-[#486283] rounded-full" />
                  <div className="w-[25px] h-[25px] left-[0px] top-[0px] absolute text-center text-white text-base font-bold font-['Plus Jakarta Sans'] leading-normal">
                    2
                  </div>
                </div>
                <div className="bg-blue-200 rounded-lg px-4 py-2 w-full">
                  <p className="text-black text-base font-medium whitespace-pre-wrap">
                    {recommendQuestion2}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-[25px] h-[25px] relative">
                  <div className="w-[25px] h-[25px] left-0 top-0 absolute bg-[#486283] rounded-full" />
                  <div className="w-[25px] h-[25px] left-[0px] top-[0px] absolute text-center text-white text-base font-bold font-['Plus Jakarta Sans'] leading-normal">
                    3
                  </div>
                </div>
                <div className="bg-blue-200 rounded-lg px-4 py-2 w-full">
                  <p className="text-black text-base font-medium whitespace-pre-wrap">
                    {recommendQuestion3}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[252px] h-[49px] left-[0px] top-[595px] absolute text-center text-black text-2xl font-bold leading-9">
            <div className="w-[1040px] h-[50px] left-0 top-0 absolute bg-gradient-to-r from-white to-blue-100 rounded-[10px]" />
            <div className="w-[228px] h-[49px] left-[432px] top-[6px] absolute text-center text-black text-2xl font-bold leading-9">
              추천 자기소개서 문항
            </div>
          </div>
        </div>
        {isGuest !== 'true' && (
          <div className="w-[334px] h-[58px] left-[900px] top-[1746px] absolute flex justify-between items-center">
            <button
              className="w-[100px] h-[40px] left-0 top-0 absolute select-none rounded-[15px] bg-blue-400  py-1 px-6 text-center align-middle  text-xl font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={onEditClick}
            >
              수정
            </button>
            <button
              className="w-[100px] h-[40px] left-[130px] top-0 absolute select-none rounded-[15px] border border-gray-900 py-1 px-6 text-center align-middle  text-xl font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={openModal}
            >
              삭제
            </button>
          </div>
        )}
        <div onClick={handleModalClick}>
          {isOpen ? (
            isGuest !== 'true' ? (
              <DeleteModal
                closeModal={closeModal}
                deleteUser={() => deleteCov(coverLetterId || 0)}
                text="정말 삭제하시겠습니까?"
              />
            ) : isGuest === 'true' ? (
              <CheckPoint
                closeCheck={closeModal}
                cost={200}
                coverLetterId={coverLetterId}
                setShowInputs={closeModal}
                setAnalysisClicked={closeModal}
                usingType={'USE_COVER_LETTER'}
              />
            ) : null
          ) : null}
        </div>
        <div
          className={`w-[672px] h-[53px] left-[216px] top-[62px] absolute justify-center items-center gap-3 inline-flex `}
        >
          <div className="w-24 h-[50px] px-5 bg-slate-600 rounded-[30px] justify-center items-center gap-2 flex">
            <div className="w-[76px] text-center text-white text-[25px] font-semibold leading-[37.50px]">
              문항
            </div>
          </div>
          <div className="text-black text-[35px] font-semibold leading-[52.50px] truncate">
            {question}
          </div>
          <div className="ml-1 cursor-pointer text-white bg-black px-3 py-1 rounded-full relative group">
            ?
            <div className="absolute w-64 bg-black text-white text-sm rounded-lg p-2 invisible group-hover:visible bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-10">
              {question}
            </div>
          </div>
        </div>
        <div
          className={`w-[670px] h-[50px] left-[240px] top-[150px] absolute justify-start items-start gap-[35px] inline-flex `}
        >
          <div className="w-[200px] h-[50px] px-5 bg-blue-50 rounded-[30px] justify-center items-center gap-2 flex">
            <div className="text-center text-blue-400 text-xl font-semibold leading-[30px]">
              #{keyword1}
            </div>
          </div>
          <div className="w-[200px] h-[50px] px-5 bg-blue-50 rounded-[30px] justify-center items-center gap-2 flex">
            <div className="text-center text-blue-400 text-xl font-semibold leading-[30px]">
              #{keyword2}
            </div>
          </div>
          <div className="w-[200px] h-[50px] px-5 bg-blue-50 rounded-[30px] justify-center items-center gap-2 flex">
            <div className="text-center text-blue-400 text-xl font-semibold leading-[30px]">
              #{jobKeyword}
            </div>
          </div>
        </div>
        {!paid && (
          <div className="relative h-full">
            <div className="absolute bottom-[80px] left-[480px]">
              <Button
                buttonText={'전체 내용 확인하기'}
                type={'boardPost'}
                isDisabled={false}
                className="bg-[#7AAAE8] text-white text-xl font-semibold"
                onClickHandler={openModal}
              />
            </div>
          </div>
        )}
      </div>
    )
  } else if (!hasFeedback && !hasAnalysis) {
    return (
      <div className="w-full h-[800px] relative">
        <div className="w-full h-[800px] left-0 top-0 absolute">
          <div className="w-full h-full left-0 top-0 absolute bg-white " />
          <div className="w-[1090px] h-[440px] left-[60px] top-[180px] absolute border-2 border-gray-300 rounded-[15px] ">
            <div
              className={`w-[1020px] h-[405px] left-[30px] top-[18px] absolute text-black text-xl font-medium leading-[30px] ${!paid && 'blur'} whitespace-pre-wrap overflow-y-auto scrollbar-hide`}
            >
              {answer}
            </div>
          </div>
          <button
            onClick={handleCopyAnswer}
            className=" bg-white text-black rounded absolute left-[1110px] top-[630px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          </button>
        </div>

        {isGuest !== 'true' && (
          <div className="w-[334px] h-[58px] left-[900px] top-[700px] absolute flex justify-between items-center">
            <button
              className="w-[100px] h-[40px] left-0 top-0 absolute select-none rounded-[15px] bg-blue-400  py-1 px-6 text-center align-middle  text-xl font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={onEditClick}
            >
              수정
            </button>
            <button
              className="w-[100px] h-[40px] left-[130px] top-0 absolute select-none rounded-[15px] border border-gray-900 py-1 px-6 text-center align-middle  text-xl font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={openModal}
            >
              삭제
            </button>
          </div>
        )}
        <div onClick={handleModalClick}>
          {isOpen ? (
            isGuest !== 'true' ? (
              <DeleteModal
                closeModal={closeModal}
                deleteUser={() => deleteCov(coverLetterId || 0)}
                text="정말 삭제하시겠습니까?"
              />
            ) : isGuest === 'true' ? (
              <CheckPoint
                closeCheck={closeModal}
                cost={200}
                coverLetterId={coverLetterId}
                setShowInputs={closeModal}
                setAnalysisClicked={closeModal}
                usingType={'USE_COVER_LETTER'}
              />
            ) : null
          ) : null}
        </div>
        <div className="w-[672px] h-[53px] left-[216px] top-[62px] absolute justify-center items-center gap-5 inline-flex">
          <div className="w-24 h-[50px] px-5 bg-slate-600 rounded-[30px] justify-center items-center gap-2 flex">
            <div className="w-[76px] text-center text-white text-[25px] font-semibold leading-[37.50px]">
              문항
            </div>
          </div>
          <div className="text-black text-[35px] font-semibold leading-[52.50px] truncate">
            {question}
          </div>
          <div className="ml-1 cursor-pointer text-white bg-black px-3 py-1 rounded-full relative group">
            ?
            <div className="absolute w-64 bg-black text-white text-sm rounded-lg p-2 invisible group-hover:visible bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-10">
              {question}
            </div>
          </div>
        </div>
        {!paid && (
          <div className="relative h-full">
            <div className="absolute bottom-[80px] left-[480px]">
              <Button
                buttonText={'전체 내용 확인하기'}
                type={'boardPost'}
                isDisabled={false}
                className="bg-[#7AAAE8] text-white text-xl font-semibold"
                onClickHandler={openModal}
              />
            </div>
          </div>
        )}
      </div>
    )
  } else if (!hasFeedback && hasAnalysis) {
    return (
      <div className="w-full h-[1950px] relative">
        <div className="w-full h-[1950px] left-0 top-0 absolute">
          <div className="w-full h-full left-0 top-0 absolute bg-white " />
          <div className="w-[1090px] h-[440px] left-[60px] top-[222px] absolute border-2 border-gray-300 rounded-[15px] overflow-y-auto  scrollbar-hide">
            <div
              className={`w-[1020px] h-[405px] left-[30px] top-[18px] absolute text-black text-xl font-medium leading-[30px] overflow-y-auto  scrollbar-hide ${!paid && 'blur'} whitespace-pre-wrap overflow-y-auto scrollbar-hide`}
            >
              {answer}
            </div>
          </div>
          <button
            onClick={handleCopyAnswer}
            className=" bg-white text-black rounded absolute left-[1110px] top-[670px] "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-[1090px] h-[1030px] left-[60px] top-[765px] absolute border-2 border-gray-300 rounded-[15px] ${!paid && 'blur'}`}
        >
          <div className="w-[981px] h-[1000px] left-0 top-0 flex items-center justify-center mx-auto relative ">
            <div className="w-[950px] h-[0px] top-[70px] absolute border  border-zinc-300"></div>
            <div className="w-[773px] h-[52px] top-[101px] absolute text-center text-black text-3xl font-bold  leading-[45px]">
              <span className="text-[#0A7AFF] text-3xl font-bold leading-[45px]">
                {userInfo?.memberName}{' '}
              </span>
              <span className="text-black text-3xl font-bold leading-[45px]">
                님과 {jobKeyword}의 직무 적합도는
              </span>
              <span className="bg-[#D8E9FF] text-black px-2 py-1 rounded-md text-3xl font-bold">
                {JobSuitability}%
              </span>
              <span className="text-black text-3xl font-bold leading-[45px]">
                입니다.
              </span>
            </div>
            <div className=" top-[643px] absolute text-black text-2xl font-bold  leading-9">
              <span className="text-[#0A7AFF]">{userInfo?.memberName} </span>
              <span>님은 이런 역량이 두드러져요!</span>
            </div>
            <div className="w-[547px] h-[29px] top-[150px] absolute text-black text-2xl font-medium  leading-9">
              👍 조금만 더 노력하면 분명 원하는 목표에 도달할 거예요!
            </div>
            <div className="w-[360px] h-[360px] left-[285px] top-[198px] absolute  justify-center items-center inline-flex">
              <div className="w-[360px] h-[360px] relative">
                <JobAnal
                  jKeyword={jobKeyword}
                  accuracy={Number(roundedPercentage)}
                  all={100 - Number(roundedPercentage)}
                />
                <div className="bg-[#0A7AFF] w-5 h-5 rounded-[100px] absolute bottom-[-24px] left-[132px]"></div>
              </div>
            </div>
            <div className="w-[569px] h-[202px]  top-[713px] absolute">
              <div className="w-[569px] h-[202px] left-[-20px] top-0 absolute justify-center items-center gap-[59px] inline-flex">
                <div className="justify-start items-start gap-2.5 flex">
                  <div className="w-[150px] h-[150px] relative items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="134"
                      height="134"
                      viewBox="0 0 134 134"
                      fill="none"
                      className="absolute z-10 left-[8px] top-[8px]"
                    >
                      <path
                        id="Ellipse 2524"
                        d="M67 130.5C102.07 130.5 130.5 102.07 130.5 67C130.5 31.9299 102.07 3.5 67 3.5C31.9299 3.5 3.5 31.9299 3.5 67C3.5 102.07 31.9299 130.5 67 130.5Z"
                        fill="white"
                        stroke="#CFE8FF"
                        strokeWidth="7"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="150"
                      height="150"
                      viewBox="0 0 150 150"
                      fill="none"
                      className="absolute top-0"
                    >
                      <path
                        id="Ellipse 2525"
                        d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z"
                        fill="url(#paint0_linear_1900_258)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1900_258"
                          x1="75"
                          y1="0"
                          x2="75"
                          y2="150"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="#7AAAE8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="w-[100px] h-[58px] left-[25px] top-[45px] absolute text-center text-black text-lg font-bold leading-[30px] z-20">
                      {AnalysisData?.keyword1}
                    </div>
                  </div>
                </div>
                <div className="justify-start items-start gap-2.5 flex">
                  <div className="w-[200px] h-[200px] relative flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="180"
                      height="180"
                      viewBox="0 0 180 180"
                      fill="none"
                      className="absolute z-10 left-[10px] top-[10px]"
                    >
                      <circle
                        id="Ellipse 2525"
                        cx="90"
                        cy="90"
                        r="85"
                        fill="white"
                        stroke="#529EFF"
                        strokeWidth="10"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      className="absolute top-0"
                    >
                      <path
                        id="Ellipse 2526"
                        d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z"
                        fill="url(#paint0_linear_1900_259)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1900_259"
                          x1="100"
                          y1="0"
                          x2="100"
                          y2="200"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="#0A7AFF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="w-[150px] h-[60px]  left-[25px] top-[75px] absolute text-center text-black text-2xl font-bold leading-[30px] z-20">
                      {AnalysisData?.keyword2}
                    </div>
                  </div>
                </div>
                <div className="w-[150px] h-[150px] relative items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="134"
                    height="134"
                    viewBox="0 0 134 134"
                    fill="none"
                    className="absolute z-10 left-[8px] top-[8px]"
                  >
                    <circle
                      id="Ellipse 2526"
                      cx="67"
                      cy="67"
                      r="63.5"
                      fill="white"
                      stroke="#7AAAE8"
                      strokeWidth="7"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    viewBox="0 0 150 150"
                    fill="none"
                    className="absolute top-0"
                  >
                    <path
                      id="Ellipse 2527"
                      d="M150 75C150 116.421 116.421 150 75 150C33.5786 150 0 116.421 0 75C0 33.5786 33.5786 0 75 0C116.421 0 150 33.5786 150 75Z"
                      fill="url(#paint0_linear_1900_260)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1900_260"
                        x1="75"
                        y1="0"
                        x2="75"
                        y2="150"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="#558BCF" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="w-[100px] h-[58px] left-[25px] top-[45px] absolute text-center text-black text-lg font-bold leading-[30px] z-20">
                    {AnalysisData?.keyword3}
                  </div>
                </div>
              </div>
              <div className="w-[600px] h-[22px] left-[-10px] top-[207px] absolute justify-start items-start gap-[345px] inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="138"
                  height="22"
                  viewBox="0 0 138 22"
                  fill="none"
                >
                  <ellipse
                    id="Ellipse 2541"
                    cx="69"
                    cy="11"
                    rx="69"
                    ry="11"
                    fill="url(#paint0_angular_1923_252)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1923_252"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(69 11) scale(69 11)"
                    >
                      <stop stop-color="#CCCCCC" />
                      <stop offset="0.235" stop-color="#B4B4B4" />
                      <stop offset="1" stop-color="#666666" />
                    </radialGradient>
                  </defs>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="138"
                  height="22"
                  viewBox="0 0 138 22"
                  fill="none"
                >
                  <ellipse
                    id="Ellipse 2541"
                    cx="69"
                    cy="11"
                    rx="69"
                    ry="11"
                    fill="url(#paint0_angular_1923_252)"
                  />
                  <defs>
                    <radialGradient
                      id="paint0_angular_1923_252"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(69 11) scale(69 11)"
                    >
                      <stop stop-color="#CCCCCC" />
                      <stop offset="0.235" stop-color="#B4B4B4" />
                      <stop offset="1" stop-color="#666666" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="180"
                height="22"
                viewBox="0 0 180 22"
                fill="none"
                className="left-[203px] top-[239px] absolute"
              >
                <ellipse
                  id="Ellipse 2542"
                  cx="90"
                  cy="11"
                  rx="90"
                  ry="11"
                  fill="url(#paint0_angular_1923_253)"
                />
                <defs>
                  <radialGradient
                    id="paint0_angular_1923_253"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(90 11) scale(90 11)"
                  >
                    <stop stop-color="#D9D9D9" />
                    <stop offset="1" stop-color="#737373" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="top-[12px] absolute text-center text-blue-400 text-[35px] font-bold  leading-[52.50px]">
              AI 자기소개서 직무 역량 분석
            </div>
          </div>
        </div>
        {isGuest !== 'true' && (
          <div className="w-[334px] h-[58px] left-[900px] top-[1846px] absolute flex justify-between items-center">
            <button
              className="w-[100px] h-[40px] left-0 top-0 absolute select-none rounded-[15px] bg-blue-400  py-1 px-6 text-center align-middle  text-xl font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={onEditClick}
            >
              수정
            </button>
            <button
              className="w-[100px] h-[40px] left-[130px] top-0 absolute select-none rounded-[15px] border border-gray-900 py-1 px-6 text-center align-middle  text-xl font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={openModal}
            >
              삭제
            </button>
          </div>
        )}
        <div onClick={handleModalClick}>
          {isOpen ? (
            isGuest !== 'true' ? (
              <DeleteModal
                closeModal={closeModal}
                deleteUser={() => deleteCov(coverLetterId || 0)}
                text="정말 삭제하시겠습니까?"
              />
            ) : isGuest === 'true' ? (
              <CheckPoint
                closeCheck={closeModal}
                cost={200}
                coverLetterId={coverLetterId}
                setShowInputs={closeModal}
                setAnalysisClicked={closeModal}
                usingType={'USE_COVER_LETTER'}
              />
            ) : null
          ) : null}
        </div>
        <div className="w-[672px] h-[53px] left-[216px] top-[62px] absolute justify-center items-center gap-3 inline-flex">
          <div className="w-24 h-[50px] px-5 bg-slate-600 rounded-[30px] justify-center items-center gap-2 flex">
            <div className="w-[76px] text-center text-white text-[25px] font-semibold leading-[37.50px]">
              문항
            </div>
          </div>
          <div className="text-black text-[35px] font-semibold leading-[52.50px] truncate">
            {question}
          </div>
          <div className="ml-1 cursor-pointer text-white bg-black px-3 py-1 rounded-full relative group">
            ?
            <div className="absolute w-64 bg-black text-white text-sm rounded-lg p-2 invisible group-hover:visible bottom-full mb-2 left-1/2 transform -translate-x-1/2 z-10">
              {question}
            </div>
          </div>
        </div>
        <div className="w-[670px] h-[50px] left-[240px] top-[150px] absolute justify-start items-start gap-[35px] inline-flex">
          <div className="w-[200px] h-[50px] px-5 bg-blue-50 rounded-[30px] justify-center items-center gap-2 flex">
            <div className="text-center text-blue-400 text-xl font-semibold leading-[30px]">
              #{keyword1}
            </div>
          </div>
          <div className="w-[200px] h-[50px] px-5 bg-blue-50 rounded-[30px] justify-center items-center gap-2 flex">
            <div className="text-center text-blue-400 text-xl font-semibold leading-[30px]">
              #{keyword2}
            </div>
          </div>
          <div className="w-[200px] h-[50px] px-5 bg-blue-50 rounded-[30px] justify-center items-center gap-2 flex">
            <div className="text-center text-blue-400 text-xl font-semibold leading-[30px]">
              #{jobKeyword}
            </div>
          </div>
        </div>
        {!paid && (
          <div className="relative h-full">
            <div className="absolute bottom-[80px] left-[480px]">
              <Button
                buttonText={'전체 내용 확인하기'}
                type={'boardPost'}
                isDisabled={false}
                className="bg-[#7AAAE8] text-white text-xl font-semibold"
                onClickHandler={openModal}
              />
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default MyCovletCardDetail
