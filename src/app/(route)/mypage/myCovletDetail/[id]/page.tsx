'use client'

import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import MyCovletCardDetail from '@/app/components/mypage/MyCovletCardDetail'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import {
  analysisData,
  covletData,
  covletNum,
  feedbackData,
} from '@/app/recoil/coverletter'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const MyCovletDetailPage = ({ params }: { params: { id: string } }) => {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const paramsData = useSearchParams()
  const [feedBackData, setFeedBackData] = useRecoilState(feedbackData)
  const [analySisData, setAnalySisData] = useRecoilState(analysisData)
  const isGuest = paramsData.get('isGuest')
  console.log(userInfo, '사용자 정보 가져ㅇ기')

  const router = useRouter()

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
    console.log(`Fetching details for ID: ${params.id}`)
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
          console.log(data)
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
          nickname={userInfo?.memberName}
          profile={userInfo?.profile}
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
