'use client'

import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
import { covletNum } from '../../recoil/coverletter'
import Header from '@/app/components/layout/Header'
// import LoginContainer from '@/app/components/login/LoginContainer'
import ExpInfoContainer from '@/app/components/experience/ExpInfoContainer'
import ExpKeywordContainer from '@/app/components/experience/ExpKeywordContainer'
import ExpContentContainer from '@/app/components/experience/ExpContentContainer'
import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'
import CovletAiFeed from '@/app/components/coverletter/CovletAiFeed'
import Footer from '@/app/components/layout/Footer'

export default function CovletMainPage() {
  const [covletNumber, setCovletNumber] = useRecoilState(covletNum)
  const router = useRouter()
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
      <div className="w-[1440px] mb-10">
        {covletNumber === 0 && <CovletMain isEdit={false} />}
        {covletNumber === 1 && <CovletSave />}
        {/* {covletNumber === 2 && <ExpContentContainer />} */}
      </div>
      
    </section>
  )
}
