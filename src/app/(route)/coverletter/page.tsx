'use client'

import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { covletData, covletNum } from '../../recoil/coverletter'

export default function CovletMainPage() {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const [coverletterData, setCoverLetterData] = useRecoilState(covletData)
  
  const [userInfo, setUser] = useState<memberInfo | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main/user`,
      )
      const resData = await response.json()
      setUser(resData.result)
    }

    fetchData()
  }, [covletNumber])

  useEffect(() => {
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

  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header nickname={userInfo?.memberName} profile={userInfo?.profile} />
      <div className="w-[1440px] mb-[250px]">
        {covletNumber === 0 && <CovletMain isEdit={false} />}
        {covletNumber === 1 && <CovletSave />}
      </div>
      <Footer />
    </section>
  )
}
