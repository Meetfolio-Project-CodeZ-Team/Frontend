import { successCopy } from '@/app/utils/toast'
import { Switch } from '@headlessui/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRecoilState } from 'recoil'
import { covletData, covletNum, tidState } from '../../recoil/coverletter'
import ExpCardList from './ExpCardList'

interface CovletFinishContainerProps {
  isEdit?: boolean
  id?: string
}

const CovletMain = ({ isEdit, id }: CovletFinishContainerProps) => {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const router = useRouter()
  const [enabled, setEnabled] = useState(false)

  const [tid, setTid] = useRecoilState(tidState)
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
          console.log(resdata, '카카오 서버로 요청한 승인정보 응답')
          await fetch(
            `/api/mypage/myCovletDetail?coverLetterId=${Number(coverletterId)}`,
          )
            .then((response) => response.json())
            .then((data) => {
              if (data && data.result && data.result.coverLetterInfo) {
                setCoverLetterData({
                  ...data.result.coverLetterInfo,
                })
              }
            })

          const req = {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
          }

          const sendApprove = await fetch(
            `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/kakaopay/payments/approve`,
            req,
          )
          const approveRes = await sendApprove.json()
          console.log('서버로 승인 정보 보내고 응답', approveRes)
          const paymentId = approveRes.result.paymentId

          const resComplete = await fetch(
            `/api/kakaopay/complete?id=${paymentId}&pgToken=${pg_token}`,
          )
          const completeData = await resComplete.json()
          console.log('완료 요청 보내고 응답', completeData)
        } catch (error) {
          console.error(error)
        }
      }
      getTid()
      setCovletNumber(1)
    }
  }, [pg_token])

  const handleToggle = () => {
    setEnabled(!enabled)
    const newShareType = !enabled ? 'PUBLIC' : 'PRIVATE'
    setCoverLetterData({ ...coverletterData, shareType: newShareType })
    console.log(coverletterData, '자소서 데이터')
  }

  useEffect(() => {
    if (coverletterData.shareType) {
      setEnabled(coverletterData.shareType === 'PUBLIC')
    }
  }, [coverletterData.shareType]) // coverletterData의 shareType이 바뀔 때마다 enabled를 업데이트

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
                stroke-width="1.8"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
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
      <div className="w-[870px] h-[60px] left-[59px] top-[750px] absolute">
        {/* <div className="w-[556.33px] left-[161.34px] top-[12px] absolute text-center text-slate-600 text-2xl font-semibold  leading-9">
          저장하기
        </div> */}
        <button
          className="text-white  bg-stone-300 border-0 py-[18px] px-[380px] focus:outline-none hover:bg-gray-800 rounded-[30px] text-xl font-semibold"
          onClick={saveCovData}
          type="button"
        >
          저장하기
        </button>
      </div>
      <ExpCardList />
    </div>
  )
}

export default CovletMain
