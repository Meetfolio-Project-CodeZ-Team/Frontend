'use client'

import { useModal } from '@/app/hooks/useModal'
import {
  analysisData,
  covletData,
  feedbackData,
} from '@/app/recoil/coverletter'
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import CovletDeleteModal from './common/CovletDeleteModal'
import DeleteModal from '../admin/common/DeleteModal'
import { useEffect, useState } from 'react'

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
}: CovletCardDetail) => {
  console.log(coverLetterId, 'id 수정 삭제에서 가져오기')

  const router = useRouter()
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const [AnalysisData, setAnalySisData] = useRecoilState(analysisData)
  const [initialLoad, setInitialLoad] = useState(true)

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
      // 텍스트를 클립보드에 복사
      const successful = document.execCommand('copy')
      const msg = successful ? 'successful' : 'unsuccessful'
      console.log('Copying text command was ' + msg)
      alert('Text copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy text: ', err)
      alert('Failed to copy text.')
    }

    // 생성된 textarea 요소를 제거
    document.body.removeChild(textArea)
  }

  const jobSuitabilityPercentage = (AnalysisData?.jobSuitability ?? 0) * 100

  // 결과를 반올림합니다 (예: 0.25%)
  const roundedPercentage = Math.round(jobSuitabilityPercentage * 100) / 100

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
    console.log('자소서 삭제 요청이에요', coverLetterId)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/mypage/myCovlet/delete?coverLetterId=${coverLetterId}`,
        {
          method: 'DELETE',
        },
      )

      if (res.ok) {
        console.log('자기소개서가 성공적으로 삭제되었습니다.')
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

  // useEffect(() => {
  //   // 컴포넌트가 마운트 되었을 때, initialLoad가 true인 경우에만 새로고침
  //   if (initialLoad) {
  //     window.location.reload()
  //     setInitialLoad(false) // 새로고침 후에는 더 이상 새로고침 하지 않도록 상태를 false로 설정
  //   }
  // }, [initialLoad])

  useEffect(() => {
    // 페이지가 처음 로드될 때만 새로고침을 수행합니다.
    const shouldReload = localStorage.getItem('reloaded') !== 'true';

    if (shouldReload) {
      localStorage.setItem('reloaded', 'true'); // 새로고침 플래그를 설정합니다.
      window.location.reload();
    } else {
      localStorage.removeItem('reloaded'); // 다음 새로고침을 위해 플래그를 제거합니다.
    }
  }, [coverLetterId]);

  if (hasFeedback && !hasAnalysis) {
    return (
      <div className="w-full h-[1825px] relative">
        <div className="w-full h-[1825px] left-0 top-0 absolute">
          <div className="w-full h-full left-0 top-0 absolute bg-white " />
          <div className="w-[1090px] h-[440px] left-[60px] top-[222px] absolute border-2 border-gray-300 rounded-[15px] overflow-y-auto  scrollbar-hide">
            <div className="w-[1020px] h-[405px] left-[30px] top-[18px] absolute text-black text-xl font-medium leading-[30px] overflow-y-auto  scrollbar-hide">
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
              stroke-width="1.8"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          </button>
        </div>
        <div className="w-[1090px] h-[965px] left-[60px] top-[765px] absolute border-2 border-gray-300 rounded-[15px]">
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
          {isOpen && (
            <DeleteModal
              closeModal={closeModal}
              deleteUser={() => deleteCov(coverLetterId || 0)}
              text="정말 삭제하시겠습니까?"
            />
          )}
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
      </div>
    )
  } else if (!hasFeedback && !hasAnalysis) {
    return (
      <div className="w-full h-[1000px] relative">
        <div className="w-full h-[1000px] left-0 top-0 absolute">
          <div className="w-full h-full left-0 top-0 absolute bg-white " />
          <div className="w-[1090px] h-[440px] left-[60px] top-[180px] absolute border-2 border-gray-300 rounded-[15px] ">
            <div className="w-[1020px] h-[405px] left-[30px] top-[18px] absolute text-black text-xl font-medium leading-[30px]">
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
              stroke-width="1.8"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
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
          {isOpen && (
            <CovletDeleteModal
              closeModal={closeModal}
              deleteCov={() => deleteCov(coverLetterId)}
            />
          )}
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
      </div>
    )
  } else if (!hasFeedback && hasAnalysis) {
    return (
      <div className="w-full h-[1850px] relative">
        <div className="w-full h-[1850px] left-0 top-0 absolute">
          <div className="w-full h-full left-0 top-0 absolute bg-white " />
          <div className="w-[1090px] h-[440px] left-[60px] top-[222px] absolute border-2 border-gray-300 rounded-[15px] overflow-y-auto  scrollbar-hide">
            <div className="w-[1020px] h-[405px] left-[30px] top-[18px] absolute text-black text-xl font-medium leading-[30px] overflow-y-auto  scrollbar-hide">
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
              stroke-width="1.8"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
              />
            </svg>
          </button>
        </div>
        <div className="w-[1090px] h-[972px] left-[60px] top-[765px] absolute border-2 border-gray-300 rounded-[15px]">
          <div className="w-[981px] h-[1000px] left-0 top-0 flex items-center justify-center mx-auto relative ">
            <div className="w-[773px] h-[52px] left-[160px] top-[101px] absolute text-black text-3xl font-bold  leading-[45px]">
              {userInfo?.memberName}님과 빅데이터의 직무 적합도는{' '}
              {AnalysisData?.jobSuitability}%입니다.
            </div>
            <div className="left-[280px] top-[643px] absolute text-black text-2xl font-bold  leading-9">
              {userInfo?.memberName} 님은 이런 역량이 두드러져요!
            </div>
            <div className="w-[547px] h-[29px] left-[200px] top-[150px] absolute text-black text-2xl font-medium  leading-9">
              👍 조금만 더 노력하면 분명 원하는 목표에 도달할 거예요!
            </div>
            <div className="w-[180px] h-[124px] left-[511px] top-[320px] absolute text-black text-7xl font-bold  leading-[108px]">
              {AnalysisData?.jobSuitability}%
            </div>
            <div className="w-[360px] h-[360px] left-[135px] top-[198px] absolute bg-white justify-center items-center inline-flex">
              <div className="w-[360px] h-[360px] relative">
                <div className="w-[360px] h-[360px] left-0 top-0 absolute bg-white" />
                <div className="w-[300px] h-[300px] left-[40px] top-[40px] absolute bg-blue-400 rounded-full shadow" />
                <div className="w-[300px] h-[300px] left-[40px] top-[40px] absolute bg-zinc-200 rounded-full" />
                <div className="w-[85px] h-7 left-[229px] top-[190px] absolute text-black text-xl font-bold  leading-[30px]">
                  {jobKeyword}
                </div>
              </div>
            </div>
            <div className="w-[569px] h-[202px] left-[200px] top-[713px] absolute">
              <div className="w-[569px] h-[202px] left-0 top-0 absolute">
                <div className="w-[120px] h-[120px] left-0 top-[67px] absolute bg-slate-200 rounded-full" />
                <div className="w-[88px] h-[58px] left-[16px] top-[104px] absolute text-center text-black text-lg font-bold  leading-[27px]">
                  {AnalysisData?.keyword1}
                </div>
                <div className="w-[386px] h-[202px] left-[183px] top-0 absolute">
                  <div className="w-[180px] h-[180px] left-0 top-0 absolute bg-slate-600 rounded-full" />
                  <div className="w-[131px] h-[58px] left-[26px] top-[50px] absolute text-center text-white text-2xl font-bold  leading-9">
                    {AnalysisData?.keyword2}
                  </div>
                  <div className="w-[150px] h-[150px] left-[236px] top-[52px] absolute">
                    <div className="w-[150px] h-[150px] left-0 top-0 absolute bg-blue-400 rounded-full" />
                    <div className="w-[83px] h-[58px] left-[36px] top-[37px] absolute text-black text-[21px] font-bold  leading-loose">
                      {AnalysisData?.keyword3}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="left-[320px] top-[12px] absolute text-center text-blue-400 text-[35px] font-bold  leading-[52.50px]">
              AI 직무 역량 분석 결과
            </div>
          </div>
        </div>
        {isGuest !== 'true' && (
          <div className="w-[334px] h-[58px] left-[900px] top-[1756px] absolute flex justify-between items-center">
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
          {isOpen && (
            <DeleteModal
              closeModal={closeModal}
              deleteUser={() => deleteCov(coverLetterId || 0)}
              text="정말 삭제하시겠습니까?"
            />
          )}
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
      </div>
    )
  }
}
export default MyCovletCardDetail
