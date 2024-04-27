'use client'

import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
import Header from '@/app/components/layout/Header'
import { JOB_ENUM } from '@/app/constants/auth'
import { covletData, covletNum } from '@/app/recoil/coverletter'
import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'

const EditCoverLetterPage = ({ params }: { params: { id: string } }) => {
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
    // 첫 로드시에만 experienceNumber를 0으로 설정
    setCovletNumber(0);
  }, []); 

  useEffect(() => {
    // ID가 정의되어 있고 유효한 경우에만 데이터를 가져옵니다.
    if (params.id && typeof params.id === 'string') {
      // id의 존재성과 문자열 타입 확인
      fetch(`/api/mypage/myCovletDetail?coverLetterId=${params.id}`) // 쿼리 파라미터로 id 사용
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
    <section className="flex flex-col items-center min-h-screen ">
      <Header nickname={userInfo?.memberName} />
      <div className="w-[1440px] mb-10">
        {covletNumber === 0 && <CovletMain isEdit={true} id={params.id} />}
        {covletNumber === 1 && <CovletSave />}
        {/* {covletNumber === 2 && <ExpContentContainer />} */}
      </div>
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
