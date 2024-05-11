import { useModal } from '@/app/hooks/useModal'
import { covletData } from '@/app/recoil/coverletter'
import { successCopy } from '@/app/utils/toast'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { useRecoilState } from 'recoil'
import { expData, expNum } from '../../recoil/experience'
import MyExpCard from '../mypage/MyExpCard'
import CheckPoint2 from '../points/CheckPoint'
import { useRouter } from 'next/navigation'
import ExpCardList from './ExpCardList'

interface ExperienceCard {
  experienceId: number
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: onlyJobType
  stack: string
}

const CovletSave = () => {
  const [experienceNumber, setExperienceNumber] = useRecoilState(expNum)
  const [experienceData, setExperienceData] = useRecoilState(expData)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const { isOpen, openModal, closeModal, handleModalClick } = useModal(false)
  const [expCards, setExpCards] = useState<ExperienceCard[]>([])
  const [showInputs, setShowInputs] = useState(false)
  const [feedbackClicked, setFeedbackClicked] = useState(false)
  const router = useRouter()
  console.log(coverletterData, '자소서 데이터 현황')

  useEffect(() => {
    const fetchExpCards = async () => {
      try {
        const response = await fetch('/api/mypage/myExp')
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        setExpCards(data.result.experienceCardInfo.experienceCardItems)
      } catch (error) {
        console.error(error)
      }
    }
    fetchExpCards()
  }, [])

  const goToPreviousPage = () => {
    setExperienceNumber(experienceNumber - 1)
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCoverLetterData({
      ...coverletterData,
      [event.target.name]: event.target.value,
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setCoverLetterData({
      ...coverletterData,
      [event.target.name]: event.target.value,
    });
  }
  

  const handleButtonClick = (type: string, event: React.MouseEvent) => {
    event.preventDefault()
    setCoverLetterData({ ...coverletterData, shareType: type })
  }

  const handleShowClick = () => {
    setShowInputs(true) // 입력창을 보이게 설정
    setFeedbackClicked(true) // 피드백 버튼이 클릭되었음을 설정
  }

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

  const saveCovData = async () => {
    const {
      answer,
      question,
      shareType,
      keyword1,
      keyword2,
      jobKeyword,
      coverLetterId,
    } = coverletterData
    router.push('/coverletter/feedback')

    if (!coverLetterId) {
      console.error('coverLetterId가 없습니다.')
      return
    }

    if (
      !answer ||
      !question ||
      !shareType ||
      !keyword1 ||
      !keyword2 ||
      !jobKeyword
    ) {
      console.error('모든 필드를 채워주세요.')
      return
    }

    const response = await fetch(`/api/coverletters/save?id=${coverLetterId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answer,
        question,
        shareType,
        keyword1,
        keyword2,
        jobKeyword,
      }),
    })

    if (!response.ok) {
      console.error('데이터 저장에 실패했습니다.')
    } else {
      // 성공적으로 데이터가 저장되었을 때 필요한 로직 추가 (예: 페이지 이동)
      console.log('데이터가 성공적으로 저장되었습니다.')
    }
  }
  return (
    <div className="w-[1440px] h-[1319px] relative">
      <div className="w-[1440px] h-[1187px] left-0 top-0 absolute">
        <div className="w-[941px] h-[488px] left-[10px] top-[700px] relative">
          <div
            className={`w-[941px] ${showInputs ? 'h-[488px]' : 'h-[320px]'} left-0 top-0 absolute bg-white rounded-[30px] shadow`}
          />
          <div className="left-[257px] top-[23px] absolute text-center text-black text-2xl font-bold leading-9">
            AI 솔루션 기능을 선택하고,
            <br />
            강조하고 싶은 키워드와 지원 직무를 입력해서
            <br />내 자소서 분석 결과를 얻어보세요!
          </div>
          {showInputs && (
            <div className="w-[845px] h-[118.08px] left-[53px] top-[340px] absolute inline-flex gap-[20px]">
              <div className="w-[255px] h-[118.08px] left-0 top-0 absolute">
                {' '}
                <div className="w-[255px] h-[86.65px] left-0 top-0 absolute">
                  <div className="w-[91.33px] h-[31.50px] left-0 top-0 absolute">
                    <div className="w-[91.33px] h-[28.55px] left-0 top-[2.95px] absolute bg-zinc-300 rounded-[20px]" />
                    <div className="w-[79.30px] h-[31.50px] left-[5.37px] top-[5px] absolute text-center text-black text-base font-bold leading-normal">
                      키워드1
                    </div>
                  </div>
                  <input
                    type="text"
                    value={coverletterData.keyword1}
                    onChange={handleInputChange}
                    id="keyword1"
                    name="keyword1"
                    placeholder="ex) 문제 해결 능력"
                    maxLength={12}
                    className="w-[245px] h-[45px] left-0 top-[40px] absolute  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
                  />
                </div>
                <div className="w-[85.71px] h-[22.64px] left-[165px] top-[85px] absolute text-center text-black text-opacity-20 text-base font-bold leading-normal">
                  12자 이내
                </div>
              </div>
              <div className="w-[258px] h-[117.68px] left-[292px] top-0 absolute">
                {' '}
                <div className="w-[91.33px] h-[31.50px] left-0 top-0 absolute">
                  <div className="w-[91.33px] h-[28.55px] left-0 top-[2.95px] absolute bg-zinc-300 rounded-[20px]" />
                  <div className="w-[79.30px] h-[31.50px] left-[5.37px] top-[5px] absolute text-center text-black text-base font-bold leading-normal">
                    키워드2
                  </div>
                </div>
                <input
                  type="text"
                  value={coverletterData.keyword2}
                  onChange={handleInputChange}
                  id="keyword2"
                  name="keyword2"
                  placeholder="ex) 도전 정신"
                  maxLength={12}
                  className="w-[245px] h-[45px] left-0 top-[40px] absolute  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
                />
                <div className="w-[85.71px] h-[22.64px] left-[165px] top-[85px] absolute text-center text-black text-opacity-20 text-base font-bold leading-normal">
                  12자 이내
                </div>
              </div>
              <div className="w-[258px] h-[117.68px] left-[587px] top-0 absolute">
                <div className="w-[91.33px] h-[31.50px] left-0 top-0 absolute">
                  <div className="w-[91.33px] h-[28.55px] left-0 top-[2.95px] absolute bg-zinc-300 rounded-[20px]" />
                  <div className="w-[79.30px] h-[31.50px] left-[5.37px] top-[5px] absolute text-center text-black text-base font-bold leading-normal">
                    지원직무
                  </div>
                </div>
                <select
                  value={coverletterData.jobKeyword}
                  onChange={handleInputChange}
                  id="jobKeyword"
                  name="jobKeyword"
                  title='직무를 선택해주세요'
                  className="w-[245px] h-[45px] left-0 top-[40px] absolute bg-white border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
                >
                  <option value="" disabled hidden>지원직무 선택</option>
                  <option value="BACKEND">백엔드</option>
                  <option value="WEB">웹개발</option>
                  <option value="APP">앱개발</option>
                  <option value="DESIGN">디자인</option>
                  <option value="AI">AI</option>
                </select>
                
              </div>
            </div>
          )}
          <div className="w-[315px] h-[64.07px] left-[120px] top-[150px] absolute">
            <button
              className={`w-[280px] h-[60px] relative hover:bg-blue-300 text-slate-600 ${feedbackClicked ? 'bg-blue-300' : 'bg-gray-200'} border-0 py-2 px-0 focus:outline-none rounded-[30px] text-2xl font-semibold`}
              onClick={handleShowClick}
            >
              AI 피드백
            </button>
          </div>
          <div className="w-[315px] h-[64.07px] left-[560px] top-[150px] absolute">
            <button
              className={`w-[280px] h-[60px] relative hover:bg-blue-300 text-slate-600 bg-gray-200 border-0 py-2 px-0 focus:outline-none rounded-[30px] text-2xl font-semibold`}
              onClick={openModal}
            >
              AI 직무 역량 분석
            </button>
            {isOpen && (
              <CheckPoint2
                closeCheck={closeModal}
                cost={300}
                coverLetterId={coverletterData.coverLetterId || 0}
              />
            )}
          </div>
          <div className="w-[785px] h-[54px] left-[85px] top-[230px] absolute justify-start items-start gap-[95px] inline-flex">
            <div className="text-center">
              <span className="text-black text-opacity-70 text-lg font-semibold leading-[27px]">
                첨삭 및 맞춤법 검사
              </span>
              <span className="text-black text-opacity-45 text-lg font-medium leading-[27px]">
                {' '}
                결과를 제공하고
                <br />
                AI가 사용자에 맞는
              </span>
              <span className="text-black text-opacity-70 text-lg font-semibold leading-[27px]">
                {' '}
                자기소개서 문항
              </span>
              <span className="text-black text-opacity-45 text-lg font-medium leading-[27px]">
                을 추천합니다.
              </span>
            </div>
            <div className="text-center">
              <span className="text-black text-opacity-45 text-lg font-medium leading-[27px]">
                Meetfolio만의 AI 분석 기능으로
                <br />
              </span>
              <span className="text-black text-opacity-70 text-lg font-semibold leading-[27px]">
                내 직무 역량 및 적합도{' '}
              </span>
              <span className="text-black text-opacity-45 text-lg font-medium leading-[27px]">
                분석 결과를 제공합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[941px] h-[740px] left-[10px] top-[18px] absolute">
        <div className="w-[941px] h-[730px] left-0 top-0 absolute">
          <div className="w-[941px] h-[670px] left-0 top-0 absolute bg-white rounded-[30px]" />
          <div className="w-[856.53px] h-[500px] left-[48px] top-[170px] absolute">
            <button
              onClick={handleCopyText}
              className="absolute  top-[438px] left-[808px] right-0 mt-1 ml-0 p-2 bg-white text-black rounded-[10px] text-sm inline-flex gap-[4px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            </button>
            <div className="w-[113.41px] h-[35.32px] left-[710.12px] top-[450px] absolute text-center text-black text-opacity-20 text-base font-bold  leading-normal">
              1000자 이내
            </div>
            <div className="w-[842.50px] h-[450px] left-0 top-0 absolute">
              <textarea
                value={coverletterData.answer}
                onChange={handleTextareaChange}
                id="answer"
                name="answer"
                placeholder="질문에 대한 답변을 적어보세요."
                maxLength={1000}
                className="w-full h-[440px] text-lg bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  resize-none outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>

            <ToastContainer />
          </div>
        </div>
        <div className="w-[856.48px] h-[131.21px] left-[48px] top-[15px] absolute">
          <div className="w-[842.50px] h-[75.90px] left-0 top-[55.31px] absolute">
            <div className="w-[87.11px] h-[6.58px] left-[754.95px] top-[69.32px] absolute text-center text-black text-opacity-20 text-base font-bold  leading-normal">
              100자 이내
            </div>
            <div className="w-[842.50px] h-[60.48px] left-0 top-0 absolute">
              <input
                type="text"
                value={coverletterData.question}
                onChange={handleInputChange}
                id="question"
                name="question"
                placeholder="문항 질문을 적어보세요"
                maxLength={100}
                className="w-full h-[60px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  text-lg outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-[194.65px] h-[48.86px] left-[8px] top-[10px] absolute text-start text-black text-2xl font-bold  leading-9">
            새 자기소개서
          </div>
        </div>
      </div>
      <div
        className={`w-[1000px] h-[60px]  ${showInputs ? 'top-[1220px] left-[30px]' : 'top-[1050px] left-[45px]'} absolute pb-[150px]`}
      >
        {/* <div className="w-[556.33px] left-[161.34px] top-[12px] absolute text-center text-slate-600 text-2xl font-semibold  leading-9">
          저장하기
        </div> */}
        <button
          className="text-white bg-stone-300 border-0 py-[18px] px-[360px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={saveCovData}
        >
          {feedbackClicked ? 'AI 피드백 결과 보러가기' : '자기소개서 작성 완료'}
        </button>
      </div>
      <ExpCardList />
    </div>
  )
}

export default CovletSave
