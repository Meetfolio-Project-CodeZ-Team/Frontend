import { useRecoilState, useRecoilValue } from 'recoil'
import { covletNum, covletData } from '../../recoil/coverletter'
import ExpCard from '@/app/components/coverletter/ExpCard'
import ExpCardDetail from '@/app/components/coverletter/ExpCardDetail'
import MyExpCard from '../mypage/MyExpCard'
import { useEffect, useState } from 'react'

interface CovletFinishContainerProps {
  isEdit?: boolean
  id?: string
}
interface ExperienceCard {
  experienceId: number
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: onlyJobType
  stack: string
}

const CovletMain = ({ isEdit, id }: CovletFinishContainerProps) => {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const [expCards, setExpCards] = useState<ExperienceCard[]>([])

  useEffect(() => {
    console.log('카드 데이터 가져옴')

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

  // const goToPreviousPage = () => {
  //   setExperienceNumber(experienceNumber - 1)
  // }
  const goToNextPage = () => {
    setCovletNumber(covletNumber + 1)
  }

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setCoverLetterData({
      ...coverletterData,
      [event.target.name]: event.target.value,
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCoverLetterData({
      ...coverletterData,
      [event.target.name]: event.target.value,
    })
  }

  const handleButtonClick = (type: string, event: React.MouseEvent) => {
    event.preventDefault()
    setCoverLetterData({ ...coverletterData, shareType: type })
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
        alert('Copied to clipboard!')
      } catch (err) {
        console.error('Unable to copy text: ', err)
        alert('Failed to copy text.')
      }
    }
  }

  const saveCovData = async () => {
    const { ...dataToSend } = coverletterData
    console.log(coverletterData, isEdit, '로 수정요청')

    const urlPath = isEdit
      ? `/api/coverletters/save?id=${id}`
      : `/api/coverletters`
    const methodType = isEdit ? 'PATCH' : 'POST'
    const response = await fetch(urlPath, {
      method: methodType,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...dataToSend,
      }),
    })
    const resData = await response.json()
    setCoverLetterData({
      ...coverletterData,
      coverLetterId: resData.result.coverLetterId,
    })
    console.log(coverletterData, '자소서 데이터 현황')

    console.log(resData, '포스트 후 응답')

    if (!response.ok) {
      console.error('데이터 저장에 실패했습니다.')
    }
    goToNextPage()
  }

  return (
    <div className="w-[1440px] h-[1319px] relative">
      <div className="w-[1440px] h-[1187px] left-0 top-0 absolute">
        <div className="w-[941px] h-[179px] left-[10px] top-[940px] absolute">
          <div className="w-[941px] h-[179px] left-0 top-0 absolute bg-white rounded-[30px] shadow" />
          <div className="left-[223px] top-[24px] absolute text-center text-black text-2xl font-bold  leading-9">
            작성한 자기소개서를 다른 사용자에게 공개하시겠어요?
          </div>
          <div className="w-[428px] h-[60px] left-[240px] top-[89px] absolute justify-start items-start gap-[98px] inline-flex">
            <div className="w-[180px] h-[60px] relative">
              {/* <div className="left-[66px] top-[10px] absolute text-slate-600 text-[26px] font-semibold  leading-[39px]">
                공개
              </div> */}
              <button
                className={`w-[180px] h-[60px] relative text-slate-600 ${coverletterData.shareType === 'PUBLIC' ? 'bg-blue-300' : 'bg-gray-200'} border-0 py-2 px-0 focus:outline-none rounded-[30px] text-2xl font-semibold`}
                onClick={(event) => handleButtonClick('PUBLIC', event)}
              >
                공개
              </button>
            </div>
            <div className="w-[180px] h-[60px] relative">
              <button
                className={`w-[180px] h-[60px] relative text-slate-600 ${coverletterData.shareType === 'PRIVATE' ? 'bg-blue-300' : 'bg-gray-200'} border-0 py-2 px-0 focus:outline-none rounded-[30px] text-2xl font-semibold`}
                onClick={(event) => handleButtonClick('PRIVATE', event)}
              >
                비공개
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[941px] h-[900px] left-[10px] top-[18px] absolute">
        <div className="w-[941px] h-[900px] left-0 top-0 absolute">
          <div className="w-[941px] h-[900px] left-0 top-0 absolute bg-white rounded-[30px]" />
          <div className="w-[856.53px] h-[682.16px] left-[37.64px] top-[155.84px] absolute">
            <div className="w-[113.41px] h-[35.32px] left-[743.12px] top-[646.84px] absolute text-center text-black text-opacity-20 text-base font-bold  leading-normal">
              1000자 이내
            </div>
            <div className="w-[842.50px] h-[647.41px] left-0 top-0 absolute">
              <textarea
                value={coverletterData.answer}
                onChange={handleTextareaChange}
                id="answer"
                name="answer"
                placeholder="질문에 대한 답변을 적어보세요."
                maxLength={1000}
                className="w-full h-[640px] text-lg bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  resize-none outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
            <button
              onClick={handleCopyText}
              className="absolute top-[680px] right-2 mt-2 mr-2 p-2 bg-blue-400 text-white rounded-[10px]"
            >
              복사하기
            </button>
          </div>
        </div>
        <div className="w-[856.48px] h-[131.21px] left-[26.89px] top-[3.74px] absolute">
          <div className="w-[842.50px] h-[75.90px] left-[13.98px] top-[55.31px] absolute">
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
                className="w-full h-[60px]  bg-white  border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-indigo-200  text-xl outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-[10px]"
              />
            </div>
          </div>
          <div className="w-[194.65px] h-[48.86px] left-0 top-[7px] absolute text-center text-black text-2xl font-bold  leading-9">
            새 자기소개서
          </div>
        </div>
      </div>
      <div className="w-[870px] h-[60px] left-[59px] top-[1150px] absolute">
        {/* <div className="w-[556.33px] left-[161.34px] top-[12px] absolute text-center text-slate-600 text-2xl font-semibold  leading-9">
          저장하기
        </div> */}
        <button
          className="text-white  bg-stone-300 border-0 py-[18px] px-[380px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={saveCovData}
        >
          저장하기
        </button>
      </div>
      <div className="w-[463px] h-[1233px] left-[977px] top-[18px] absolute items-center justify-center">
        <div className="w-[463px] h-[1233px] left-0 top-0 absolute bg-white rounded-tl-[30px] rounded-bl-[30px] shadow " />
        <div className="w-[361px] h-[37.12px] left-[51px] top-[23.08px] absolute text-center">
          <span className="text-black text-[25px] font-medium  leading-[37.50px]">
            {' '}
          </span>
          <span className="text-black text-[22px] font-bold  leading-[33px]">
            경험카드 조회
          </span>
          <span className="text-black text-[25px] font-medium  leading-[37.50px]">
            {' '}
          </span>
          <span className="text-black text-sm font-medium  leading-[21px]">
            경험카드를 참고해 자소서를 작성해보세요
          </span>
        </div>
        <div className="w-[450px] h-[1100px] mt-[80px]  flex flex-col flex-wrap absolute overflow-y-auto scrollbar-hide">
          <div className="w-[350px] h-full ml-[80px] ">
            {expCards.map((card) => (
              <div className="mb-[20px]">
                <MyExpCard key={card.experienceId} {...card} />
              </div>
            ))}
          </div>
        </div>
        {/* //자소서 작성 중 경험카드 세부조회
        {/* <div className='w-[450px] h-[1100px] mt-[80px] '>
          <div className="w-[350px] h-full ml-[16px] gap-[20px]">
            <ExpCardDetail />
          </div>
        </div>  */}
      </div>
    </div>
  )
}

export default CovletMain
