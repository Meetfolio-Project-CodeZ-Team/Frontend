'use client'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import WithDrawContainer from '@/app/components/mypage/WithDrawContainer'
import { useEffect, useState } from 'react'

export default function WithDrawPage() {
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
  }, [])
  return (
    <section className="flex flex-col min-h-screen relative">
      <Header nickname={userInfo?.memberName} profile={userInfo?.profile} />
      <div className="flex w-full h-full mb-[200px]">
        <UserNavContainer
          selected={'user'}
          nickname={userInfo?.memberName}
          profile={userInfo?.profile}
        />
        <div className="flex-grow">
          <WithDrawContainer />
        </div>
      </div>
      <Footer />
    </section>
  )
}
