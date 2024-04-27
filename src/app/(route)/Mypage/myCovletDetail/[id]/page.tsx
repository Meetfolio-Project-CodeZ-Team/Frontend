'use client'

import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
import Header from '@/app/components/layout/Header'
import { JOB_ENUM } from '@/app/constants/auth'
import { covletData, covletNum } from '@/app/recoil/coverletter'
import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'
import MyCovletCardDetail from '@/app/components/mypage/MyCovletCardDetail'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'

const MyCovletDetailPage = ({ params }: { params: { id: string } }) => {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  console.log(coverletterData)
  console.log(covletNumber, '현재 페이지 번호')

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
      // id의 존재성과 문자열 타입 확인
      fetch(`/api/mypage/myCovletDetail?coverLetterId=${Number(params.id)}`) // 쿼리 파라미터로 id 사용
        .then((response) => response.json())
        .then((data) => {
          if (data && data.result && data.result.coverLetterInfo) {
            setCoverLetterData({
              ...data.result.coverLetterInfo,

              jobKeyword: transKeyword(data.result.coverLetterInfo.jobKeyword),
            })
            // experienceNumber는 서버 응답에 따라 조정되어야 합니다. 현재 API 응답에 이 값이 포함되어 있지 않다면 다른 로직이 필요합니다.
          }
        })
        .catch((error) => {
          console.error('Failed to fetch coverletter details:', error)
        })
    }
  }, [params.id])

  return (
    <section className="flex flex-col min-h-screen ">
      <Header nickname={userInfo?.memberName} />
      <div className="flex w-[full] h-[980px]">
        <UserNavContainer selected={'portfolio'} />
        <div className="flex-grow">
          <MyCovletCardDetail
            coverLetterId={Number(params.id)}
            question={coverletterData.question}
            answer={coverletterData.answer}
            keyword1={'#문제 해결 능력'}
            keyword2={'#도전 정신'}
            jobKeyword={'#빅데이터'}
            shareType={coverletterData.shareType}
          />
        </div>
      </div>
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
