'use client'

import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { covletNum } from '../../../recoil/coverletter'

import Footer from '@/app/components/layout/Footer'

import FeedSatisfaction from '@/app/components/coverletter/FeedSatisfaction'

export default function CovletFeedbackPage() {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)

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

  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header nickname={userInfo?.memberName} profile={userInfo?.profile} />
      <div className="w-[1440px] mb-[300px]">
        <FeedSatisfaction feedback_id={0} />
      </div>
      <Footer />
    </section>
  )
}
