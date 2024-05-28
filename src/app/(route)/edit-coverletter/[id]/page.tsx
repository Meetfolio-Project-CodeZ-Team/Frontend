'use client'

import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { analysisData, covletData, covletNum, feedbackData } from '@/app/recoil/coverletter'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const EditCoverLetterPage = ({ params }: { params: { id: string } }) => {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const [feedBackData, setFeedBackData] = useRecoilState(feedbackData)
  const [analySisData, setAnalySisData] = useRecoilState(analysisData)

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
    setCovletNumber(0)
  }, [])

  useEffect(() => {
    if (params.id && typeof params.id === 'string') {
      fetch(`/api/mypage/myCovletDetail?coverLetterId=${params.id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.result && data.result.coverLetterInfo) {
            setCoverLetterData({
              ...data.result.coverLetterInfo,
              shareType: transShareType(data.result.coverLetterInfo.shareType),
              jobKeyword: transKeyword(data.result.coverLetterInfo.jobKeyword),
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
          console.error('Failed to fetch coverletter details:', error)
        })
    }
  }, [params.id])

  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header nickname={userInfo?.memberName} profile={userInfo?.profile} />
      <div className="w-[1440px] mb-[250px]">
        {covletNumber === 0 && <CovletMain isEdit={true} id={params.id} />}
        {covletNumber === 1 && <CovletSave />}
      </div>
      <Footer />
    </section>
  )
}

export default EditCoverLetterPage
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
const transShareType = (shareType: string) => {
  return shareType === '공개' ? 'PUBLIC' : 'PRIVATE'
}
