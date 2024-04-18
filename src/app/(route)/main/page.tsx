'use client'

import Header from '@/app/components/layout/Header'
import IntroudeContainer from '@/app/components/main/containers/IntroduceContainer'
import MainContainer from '@/app/components/main/containers/MainContainer'
import { useEffect, useState } from 'react'

export default function MainPage() {
  const [data, setData] = useState<ResponseMain | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/main`,
      )
      const resData = await response.json()
      console.log('가져온 resData', resData)

      setData(resData.result)
      // if (resData.tokens) {
      //   setTokens(
      //     responseData.tokens.accessToken,
      //     responseData.tokens.refreshToken,
      //   )
      // }
    }
    fetchData()
  }, [])
  if (data) {
    const { memberInfo, recommendCardInfo } = data
    console.log(memberInfo, recommendCardInfo, '메인에서 가져오기~')

    return (
      <section className="flex flex-col items-center min-h-screen">
        <Header
          nickname={memberInfo?.memberName}
          profile={memberInfo?.profile}
        />
        <div className="w-[1440px] mb-10">
          <MainContainer />
        </div>
        <IntroudeContainer />
      </section>
    )
  }
}
