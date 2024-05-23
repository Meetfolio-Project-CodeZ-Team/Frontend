'use client'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import PortfolioContainer from '@/app/components/mypage/PortfolioContainer'
import Header from '@/app/components/layout/Header'
import { useEffect, useState } from 'react'
import Footer from '@/app/components/layout/Footer'
import { useRecoilState } from 'recoil'
import { portNum } from '@/app/recoil/mypage'
import MyExpList from '@/app/components/mypage/MyExpList'

export default function UserMyPage() {
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const [portfolioNumber, setPortfolioNumber] = useRecoilState(portNum)

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
          selected={'portfolio'}
          nickname={userInfo?.memberName}
        />
        <div className="flex-grow">
          {portfolioNumber === 0 && <PortfolioContainer />}
          {portfolioNumber === 1 && <MyExpList />}
        </div>
      </div>
      <Footer />
    </section>
  )
}

//폴더명 테스트
