'use client'

import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'
// import { covletNum } from '../../recoil/coverletter'
import Header from '@/app/components/layout/Header'
// import LoginContainer from '@/app/components/login/LoginContainer'
import ExpInfoContainer from '@/app/components/experience/ExpInfoContainer'
import ExpKeywordContainer from '@/app/components/experience/ExpKeywordContainer'
import ExpContentContainer from '@/app/components/experience/ExpContentContainer'
import CovletMain from '@/app/components/coverletter/CovletMain'
import CovletSave from '@/app/components/coverletter/CovletSave'
import CovletAiFeed from '@/app/components/coverletter/CovletAiFeed'
import { userState } from '@/app/recoil/signUp'

export default function CovletMainPage() {
  const [userInfo, setUser] = useState<memberInfo|null>(null)
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
  return (
    <section className="flex flex-col items-center min-h-screen ">
      <Header nickname={userInfo?.memberName} />
      <div className="w-[1440px] mb-10">
        <CovletAiFeed />
      </div>
    </section>
  )
}
