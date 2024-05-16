'use client'

import { useModal } from '@/app/hooks/useModal'
import { covletData, feedbackData } from '@/app/recoil/coverletter'
import { useRouter } from 'next/navigation'
import { useRecoilState } from 'recoil'
import CovletDeleteModal from './common/CovletDeleteModal'
import DeleteModal from '../admin/common/DeleteModal'

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
}: CovletCardDetail) => {
  console.log(coverLetterId, 'id 수정 삭제에서 가져오기')

  const router = useRouter()
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  
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
    correction ||
    recommendQuestion1 ||
    recommendQuestion2 ||
    recommendQuestion3 ||
    keyword1 ||
    keyword2 ||
    jobKeyword

    console.log(coverletterData, '자소서 상세정보 조회')
    console.log(feedbackData)
  return (
    <div>
      {hasFeedback ? (
        <div className="w-full h-[1725px] relative">
          <div className="w-full h-[1725px] left-0 top-0 absolute">
            <div className="w-full h-full left-0 top-0 absolute bg-white " />
            <div className="w-[1090px] h-[440px] left-[60px] top-[222px] absolute border-2 border-gray-300 rounded-[15px] ">
              <div className="w-[1020px] h-[405px] left-[30px] top-[18px] absolute text-black text-xl font-medium leading-[30px]">
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
          <div className="w-[1090px] h-[820px] left-[60px] top-[765px] absolute border-2 border-gray-300 rounded-[15px]">
            <div className="w-[202.26px] h-[49px] left-[425px] top-[18px] absolute text-center text-blue-400 text-3xl font-bold leading-[45px]">
              AI 피드백
            </div>
            <div className="w-[1090px] h-[800px] left-0 top-0 absolute">
              <div className="w-[1000px] h-[405px] left-[46.42px] top-[100px] absolute text-black text-xl font-medium leading-[30px]">
                {correction}
              </div>
            </div>
            <div className="w-[1003px] left-[37px] top-[545px] absolute">
              <div className="space-y-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3.5 h-3.5 bg-slate-600 rounded-full" />
                  <div className="bg-blue-200 rounded-lg px-4 py-2 w-full">
                    <p className="text-black text-base font-medium whitespace-pre-wrap">
                      {recommendQuestion1}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3.5 h-3.5 bg-slate-600 rounded-full" />
                  <div className="bg-blue-200 rounded-lg px-4 py-2 w-full">
                    <p className="text-black text-base font-medium whitespace-pre-wrap">
                      {recommendQuestion2}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3.5 h-3.5 bg-slate-600 rounded-full" />
                  <div className="bg-blue-200 rounded-lg px-4 py-2 w-full">
                    <p className="text-black text-base font-medium whitespace-pre-wrap">
                      {recommendQuestion3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[252px] h-[49px] left-[400px] top-[505px] absolute text-center text-black text-2xl font-bold leading-9">
              추천 자기소개서 문항
            </div>
          </div>
          {isGuest !== 'true' && (
            <div className="w-[334px] h-[58px] left-[900px] top-[1606px] absolute flex justify-between items-center">
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
          <div className="w-[672px] h-[53px] left-[216px] top-[62px] absolute justify-center items-center gap-5 inline-flex">
            <div className="w-24 h-[50px] px-5 bg-slate-600 rounded-[30px] justify-center items-center gap-2 flex">
              <div className="w-[76px] text-center text-white text-[25px] font-semibold leading-[37.50px]">
                문항
              </div>
            </div>
            <div className="text-black text-[35px] font-semibold leading-[52.50px]">
              {question}
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
      ) : (
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
            <div className="text-black text-[35px] font-semibold leading-[52.50px]">
              {question}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default MyCovletCardDetail
