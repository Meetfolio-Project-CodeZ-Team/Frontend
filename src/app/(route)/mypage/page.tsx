'use client'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import PortfolioContainer from '@/app/components/mypage/PortfolioContainer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'
import Footer from '@/app/components/layout/Footer'

export default function UserMyPage() {
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
    <section className="flex flex-col min-h-screen">
      <Header nickname={userInfo?.memberName} />
      <div className="flex w-[full] h-[980px]">
        <UserNavContainer
          selected={'portfolio'}
          nickname={userInfo?.memberName}
        />
        <div className="flex-grow">
          <PortfolioContainer />
        </div>
      </div>
      <Footer />
    </section>
  )
}

//폴더명 테스트
