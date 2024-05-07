'use client'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'
import Footer from '@/app/components/layout/Footer'
import MyPointContainer from '@/app/components/mypage/MyPointContainer'

export default function MyPointPage() {
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
      <Header nickname={userInfo?.memberName} />
      <div className="flex w-[full] h-[980px] mb-[200px]">
        <UserNavContainer selected={'points'} nickname={userInfo?.memberName} />
        <div className="flex-grow">
          <MyPointContainer />
        </div>
      </div>
      <Footer />
    </section>
  )
}
