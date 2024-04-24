'use client'

import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import IntroudeContainer from '@/app/components/main/containers/IntroduceContainer'
import MainContainer from '@/app/components/main/containers/MainContainer'
import { userState } from '@/app/recoil/signUp'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function MainPage() {
  const [data, setData] = useState<ResponseMain | null>(null)
  const [userInfo, setUser] = useRecoilState(userState)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main`,
      )
      const resData = await response.json()
      setUser(resData.result.memberInfo)
      setData(resData.result)
    }
    fetchData()
  }, [])
  if (data) {
    const { memberInfo, recommendCardInfo } = data
    return (
      <section className="flex flex-col items-center min-h-screen">
        <Header
          nickname={memberInfo?.memberName}
          profile={memberInfo?.profile}
        />
        <div className="w-[1440px] mb-10">
          <MainContainer nickname={memberInfo?.memberName} />
        </div>
        <IntroudeContainer
          nickname={memberInfo?.memberName}
          cardData={recommendCardInfo}
        />
        <Footer />
      </section>
    )
  }
}
