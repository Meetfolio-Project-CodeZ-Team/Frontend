import { successCopy } from '@/app/utils/toast'
import { Switch } from '@headlessui/react'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRecoilState } from 'recoil'
import {
  analysisData,
  covletData,
  covletNum,
  feedbackData,
  tidState,
} from '../../recoil/coverletter'
import ExpCardList from './ExpCardList'
import { useRouter } from 'next/navigation'
import AiFeedContainer from './AiFeedContainer'

interface CovletFinishContainerProps {
  isEdit?: boolean
  id?: string
}

const CovletMain = ({ isEdit, id }: CovletFinishContainerProps) => {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const [tid, setTid] = useRecoilState(tidState)
  const [enabled, setEnabled] = useState(false)
  const [feedbackInfo, setFeedbackInfo] = useRecoilState(feedbackData)
  const [analysisInfo, setAnalysisInfo] = useRecoilState(analysisData)
  const router = useRouter()

  const params = useSearchParams()
  const pg_token = params.get('pg_token')
  const coverletterId = params.get('id')

  setTid(tid)

  useEffect(() => {
    if (pg_token) {
      const getTid = async () => {
        try {
          const response = await fetch('/api/kakaopay/tid/approve')
          const data = await response.json()
          setTid(data.result.tid)

          const SECRET_KEY = 'DEV0B0F086576B04B715B7404AA618D4C0B985A'
          const requestData = {
            cid: 'TC0ONETIME',
            tid: data.result.tid,
            partner_order_id: 'meetfolio',
            partner_user_id: 'meetfolio',
            pg_token: pg_token,
          }
          const requestConfig = {
            method: 'POST',
            headers: {
              Authorization: `SECRET_KEY ${SECRET_KEY}`,
              'Content-type': 'application/json',
            },
            body: JSON.stringify(requestData),
          }

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/kakaopay/approve`,
            requestConfig,
          )
          const resdata = await res.json()
          await fetch(
            `/api/mypage/myCovletDetail?coverLetterId=${Number(coverletterId)}`,
          )
            .then((response) => response.json())
            .then((data) => {
              if (data && data.result && data.result.coverLetterInfo) {
                const { isPaid, shareType, ...otherCoverLetterInfo } =
                  data.result.coverLetterInfo
                setCoverLetterData({
                  ...otherCoverLetterInfo,
                  shareType: shareType === '공개' ? 'PUBLIC' : 'PRIVATE',
                })
              }
            })

          const req = {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ tid: data.result.tid }),
          }

          setCovletNumber(1)
          const sendApprove = await fetch(
            `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/kakaopay/payments/approve`,
            req,
          )
          const approveRes = await sendApprove.json()
        } catch (error) {}
      }
      getTid()
    }
  }, [pg_token])

  useEffect(() => {
    if (isEdit && id) {
      fetch(`/api/mypage/myCovletDetail?coverLetterId=${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.result && data.result.coverLetterInfo) {
            const { isPaid, shareType, ...otherCoverLetterInfo } =
              data.result.coverLetterInfo
            setCoverLetterData({
              ...otherCoverLetterInfo,
              shareType: shareType === '공개' ? 'PUBLIC' : 'PRIVATE',
            })
          }
          if (data && data.result && data.result.feedbackInfo) {
            setFeedbackInfo(data.result.feedbackInfo)
          }
          if (data && data.result && data.result.analysisInfo) {
            setAnalysisInfo(data.result.analysisInfo)
          }
        })
        .catch((error) => {
          console.error('Failed to fetch coverletter details:', error)
        })
    }
  }, [isEdit, id])
  console.log(feedbackInfo, '피드백 데이터')
  console.log(analysisInfo, '분석 데이터')

  const handleToggle = () => {
    setEnabled(!enabled)
    const newShareType = !enabled ? 'PUBLIC' : 'PRIVATE'
    setCoverLetterData({ ...coverletterData, shareType: newShareType })
  }

  useEffect(() => {
    if (coverletterData.shareType) {
      setEnabled(coverletterData.shareType === 'PUBLIC')
    }
  }, [coverletterData.shareType])

  useEffect(() => {
    const newShareType = enabled ? 'PUBLIC' : 'PRIVATE'
    setCoverLetterData({ ...coverletterData, shareType: newShareType })
  }, [enabled])

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

  const handleCopyText = () => {
    const textArea = document.getElementById('answer') as HTMLTextAreaElement
    if (textArea) {
      textArea.select()
      textArea.setSelectionRange(0, 99999)

      try {
        const successful = document.execCommand('copy')
        const msg = successful ? 'successful' : 'unsuccessful'
        successCopy()
      } catch (err) {
        alert('Failed to copy text.')
      }
    }
  }

  const saveCovData = async () => {
    const { ...dataToSend } = coverletterData

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

    if (!response.ok) {
      console.error('데이터 저장에 실패했습니다.')
    }
    goToNextPage()
  }
  const updateCovData = async () => {
    const { ...dataToSend } = coverletterData

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

    if (!response.ok) {
      console.error('데이터 저장에 실패했습니다.')
    }
    router.push('/mypage')
  }

  return (
    <div className="w-[1440px] h-[1319px] relative">
      <div className="w-[1440px] h-[1187px] left-0 top-0 absolute"></div>
      <div className="w-[941px] h-[740px] left-[10px] top-[18px] absolute">
        <div className="w-[941px] h-[730px] left-0 top-0 absolute">
          <div className="w-[941px] h-[710px] left-0 top-0 absolute bg-white rounded-[30px]" />
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
            {isEdit ? '내 자기소개서' : '새 자기소개서'}
          </div>
          <div className="flex items-center justify-center absolute left-[750px] top-[18px]">
            <Switch
              checked={enabled}
              onChange={handleToggle}
              className={`${enabled ? 'bg-blue-400' : 'bg-gray-200'}
          relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
            >
              <span
                className={`${enabled ? 'translate-x-6' : 'translate-x-1'}
            inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
              />
            </Switch>
            <span className="ml-3 text-sm font-medium">
              {enabled ? '공개' : '비공개'}
            </span>
          </div>
        </div>
      </div>
      {/* <div className="absolute left-[10px] top-[750px] ">
        <div className="w-[931px] h-[960px] relative mt-[30px] items-center justify-center mx-auto bg-gray-50 rounded-[15px] mb-[100px]">
          <div className="w-[931px] h-[958px] left-0 top-0 flex">
            <div className="w-[854px] h-[350px] left-[42px] top-[181px] absolute text-black text-xl font-medium leading-[30px] overflow-y-auto  scrollbar-hide">
              {feedbackInfo?.correction}
            </div>
          </div>
          <div className="w-[890px] h-[0px] top-[70px] absolute border  ml-[22px] border-zinc-300"></div>
          <div className="w-[910px] h-[50px]  top-[100px] absolute">
            <div className="w-[910px] h-[50px] left-0 top-0 absolute bg-gradient-to-r from-white to-blue-100 rounded-[10px]" />
            <div className="w-[228px] h-[49px] left-[358px] top-[6px] absolute text-center text-black text-2xl font-bold leading-9">
              자기소개서 첨삭 결과
            </div>
          </div>
          <div className="w-[253px] h-[49px] left-[345px] top-[18px] absolute text-center text-blue-400 text-3xl font-bold leading-[45px]">
            AI 자기소개서 피드백
          </div>

          <div className="w-[817px] h-[158px] left-[64px] top-[636px] absolute">
            <div className="list-none space-y-2">
              {[1, 2, 3].map((index) => {
                const key = `recommendQuestion${index}` as keyof FeedbackInfo
                return feedbackInfo && feedbackInfo[key] ? (
                  <li
                    key={index}
                    className="relative pl-4 bg-blue-200 text-base px-3 py-2 rounded-[10px]"
                  >
                    <div className="absolute w-[25px] h-[25px] flex items-center justify-center bg-[#486283] text-white font-bold rounded-full left-[-2.5rem] top-1/2 transform -translate-y-1/2">
                      {index}
                    </div>
                    {feedbackInfo[key]}
                  </li>
                ) : null
              })}
            </div>
          </div>
          <div className="w-[910px] h-[50px]  top-[550px] absolute">
            <div className="w-[910px] h-[50px] left-0 top-0 absolute bg-gradient-to-r from-white to-blue-100 rounded-[10px]" />
            <div className="w-[228px] h-[49px] left-[358px] top-[6px] absolute text-center text-black text-2xl font-bold leading-9">
              추천 자기소개서 문항
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-[870px] h-[60px] left-[59px] top-[750px] absolute">
        <button
          className="text-white  bg-stone-300 border-0 py-[18px] px-[380px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={isEdit? updateCovData : saveCovData}
          type="button"
        >
          {isEdit ? '수정하기' : '저장하기'}
        </button>
      </div>
      <ExpCardList />
    </div>
  )
}

export default CovletMain
