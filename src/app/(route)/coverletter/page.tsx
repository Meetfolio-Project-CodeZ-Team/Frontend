'use client'

import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { covletData, covletNum } from '../../recoil/coverletter'
// import LoginContainer from '@/app/components/login/LoginContainer'
import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'
import Footer from '@/app/components/layout/Footer'
import AiFeedContainer from '@/app/components/coverletter/AiFeedContainer'

export default function CovletMainPage() {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  const [feedbackData, setFeedbackData] = useState(null)
  const [userInfo, setUser] = useState<memberInfo | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/user`,
      )
      const resData = await response.json()
      setUser(resData.result)
      console.log(resData)
    }

    fetchData()
  }, [covletNumber])

  useEffect(() => {
    // 첫 로드시에만 experienceNumber를 0으로 설정
    setCoverLetterData({
      question: '',
      answer: '',
      shareType: 'PRIVATE',
      keyword1: '',
      keyword2: '',
      jobKeyword: '',
    })
    setCovletNumber(0)
  }, [])

  console.log(userInfo?.memberName)

  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header nickname={userInfo?.memberName} />
      <div className="w-[1440px] mb-[250px]">
        {covletNumber === 0 && <CovletMain isEdit={false} />}
        {covletNumber === 1 && <CovletSave />}
        
      </div>
      <Footer />
    </section>
  )
}
