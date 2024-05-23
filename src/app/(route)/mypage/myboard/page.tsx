'use client'
import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import MyBoard from '@/app/components/mypage/MyBoard'
import MyComment from '@/app/components/mypage/MyComment'
import MyLike from '@/app/components/mypage/MyLike'
import UserNavContainer from '@/app/components/mypage/UserNavContainer'
import { boardNum } from '@/app/recoil/mypage'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

export default function MyBoardPage() {
  const [userInfo, setUser] = useState<memberInfo | null>(null)
  const [boardNumber, setBoardNumber] = useRecoilState(boardNum)

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
        <UserNavContainer selected={'board'} nickname={userInfo?.memberName} />
        <div className="flex-grow ">
          {boardNumber === 0 && <MyBoard />}
          {boardNumber === 1 && <MyLike />}
          {boardNumber === 2 && <MyComment />}
        </div>
      </div>
      <Footer />
    </section>
  )
}
