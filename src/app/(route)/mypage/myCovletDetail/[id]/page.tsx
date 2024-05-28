'use client'

import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import MyCovletCardDetail from '@/app/components/mypage/MyCovletCardDetail'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import {
  analysisData,
  covletData,
  feedbackData,
  tidState,
} from '@/app/recoil/coverletter'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const MyCovletDetailPage = ({ params }: { params: { id: string } }) => {
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const paramsData = useSearchParams()
  const [feedBackData, setFeedBackData] = useRecoilState(feedbackData)
  const [analySisData, setAnalySisData] = useRecoilState(analysisData)
  const isGuest = paramsData.get('isGuest')
  const writerName = paramsData.get('writerName')
  const profile = paramsData.get('profile')

  const [tid, setTid] = useRecoilState(tidState)
  const router = useRouter()
  const paramsInfo = useSearchParams()
  const pg_token = paramsInfo.get('pg_token')

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

          const req = {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({ tid: data.result.tid }),
          }

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
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/user`,
      )
      const resData = await response.json()
      setUser(resData.result)
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (params.id && typeof params.id === 'string') {
      fetch(`/api/mypage/myCovletDetail?coverLetterId=${Number(params.id)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.result && data.result.coverLetterInfo) {
            setCoverLetterData({
              ...data.result.coverLetterInfo,
            })
          }
          if (data && data.result && data.result.feedbackInfo) {
            setFeedBackData(data.result.feedbackInfo)
          }
          if (data && data.result && data.result.analysisInfo) {
            setAnalySisData(data.result.analysisInfo)
          }
        })
        .catch((error) => {
          console.error('Failed to fetch cover letter details:', error)
        })
    }
  }, [params.id])

  return (
    <section className="flex flex-col min-h-screen relative">
      <Header nickname={userInfo?.memberName} profile={userInfo?.profile} />
      <div className="flex w-full h-full mb-[200px]">
        <UserNavContainer
          isGuest={isGuest || ''}
          selected={'portfolio'}
          nickname={
            writerName === 'undefined' ? userInfo?.memberName : writerName || ''
          }
          profile={profile === 'undefined' ? userInfo?.profile : profile || ''}
        />
        <div className="flex-grow">
          <MyCovletCardDetail
            coverLetterId={Number(params.id)}
            question={coverletterData.question}
            answer={coverletterData.answer}
            keyword1={coverletterData?.keyword1}
            keyword2={coverletterData?.keyword2}
            jobKeyword={coverletterData?.jobKeyword}
            shareType={coverletterData.shareType}
            isGuest={isGuest || ''}
            isPaid={coverletterData?.isPaid || false}
            correction={feedBackData?.correction}
            recommendQuestion1={feedBackData?.recommendQuestion1}
            recommendQuestion2={feedBackData?.recommendQuestion2}
            recommendQuestion3={feedBackData?.recommendQuestion3}
            jobSuitability={analySisData?.jobSuitability}
          />
        </div>
      </div>
      <Footer />
    </section>
  )
}
export default MyCovletDetailPage
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
