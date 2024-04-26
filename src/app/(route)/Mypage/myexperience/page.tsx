'use client'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import Header from '@/app/components/layout/Header'
import MyExpList from '@/app/components/mypage/MyExpList'
import { useEffect, useState } from 'react'

export default function MyExperiencePage() {
  const [userInfo, setUser] = useState<memberInfo|null>(null)

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
        <UserNavContainer selected={'portfolio'} />
        <div className="flex-grow">
          <MyExpList />
        </div>
      </div>
    </section>
  )
}
