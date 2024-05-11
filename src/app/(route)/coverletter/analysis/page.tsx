'use client'

import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { covletNum, tidState } from '../../../recoil/coverletter'
// import LoginContainer from '@/app/components/login/LoginContainer'
import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'
import CovletAiFeed from '@/app/components/coverletter/CovletAiFeed'

import Footer from '@/app/components/layout/Footer'

import { useSearchParams } from 'next/navigation'
import AiFeedContainer from '@/app/components/coverletter/AiFeedContainer'


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
      console.log(resData)
    }

    fetchData()
  }, [covletNumber])

  console.log(userInfo?.memberName)

  return (
    <section className="flex flex-col items-center min-h-screen relative">
      <Header nickname={userInfo?.memberName} />
      <div className="w-[1440px] mb-[300px]">
        <CovletAiFeed/>
      </div>
      <Footer/>
    </section>
  )
}
