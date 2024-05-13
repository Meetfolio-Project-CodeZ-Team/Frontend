'use client'

import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import MyCovletCardDetail from '@/app/components/mypage/MyCovletCardDetail'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import { covletData, covletNum } from '@/app/recoil/coverletter'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

const MyCovletDetailPage = ({ params }: { params: { id: string } }) => {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const paramsData = useSearchParams()
  const isGuest = paramsData.get('isGuest')

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
    // ID가 정의되어 있고 유효한 경우에만 데이터를 가져옵니다.
    if (params.id && typeof params.id === 'string') {
      fetch(`/api/mypage/myCovletDetail?coverLetterId=${Number(params.id)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.result && data.result.coverLetterInfo) {
            setCoverLetterData({
              ...data.result.coverLetterInfo,
              jobKeyword: transKeyword(data.result.coverLetterInfo.jobKeyword),
            })
          }
        })
        .catch((error) => {
          console.error('Failed to fetch coverletter details:', error)
        })
    }
  }, [params.id])

  return (
    <section className="flex flex-col min-h-screen relative">
      <Header nickname={userInfo?.memberName} />
      <div className="flex w-full h-full mb-[200px]">
        <UserNavContainer
          isGuest={isGuest || ''}
          selected={'portfolio'}
          nickname={userInfo?.memberName}
        />
        <div className="flex-grow">
          <MyCovletCardDetail
            coverLetterId={Number(params.id)}
            question={coverletterData.question}
            answer={coverletterData.answer}
            keyword1={coverletterData.keyword1}
            keyword2={coverletterData.keyword2}
            jobKeyword={coverletterData.jobKeyword}
            shareType={coverletterData.shareType}
            isGuest={isGuest || ''}
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
