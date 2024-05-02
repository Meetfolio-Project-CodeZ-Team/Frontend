'use client'

import Link from 'next/link'
import MyExpCard from './MyExpCard'
import { useState, useEffect } from 'react'

interface ExperienceCard {
  experienceId: number
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: onlyJobType
  stack: string
}

const MyExpList = () => {
  const [expCards, setExpCards] = useState<ExperienceCard[]>([])

  useEffect(() => {
    // 서버에서 경험카드 데이터를 가져오는 함수
    const fetchExpCards = async () => {
      try {
        const response = await fetch('/api/mypage/myExp')
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        console.log(data) // 타입 에러가 발생하지 않아야 함
        setExpCards(data.result.experienceCardInfo.experienceCardItems)
      } catch (error) {
        console.error(error)
      }
    }

    fetchExpCards()
  }, [])

  console.log(expCards, '카드 목록 정보')
  return (
    <div className="w-full h-[1090px] relative">
      <div className="w-full h-[979px] left-0 top-0 absolute bg-gray-50 " />
      <div className="w-[963px] h-[970px] left-[75px] top-[42px] absolute ">
        <div className="w-[248px] h-[30px] left-[14px] top-0 absolute justify-start items-center gap-[60px] inline-flex">
          <div className="text-gray-900 text-xl font-bold leading-[30px]">
            <Link href="/mypage">내 자기소개서</Link>
          </div>
          <div className="text-gray-900 text-xl font-bold leading-[30px]">
            <Link href="/mypage/myexperience">경험 카드</Link>
          </div>
        </div>
        <div className="w-[1100px] h-[1.42px] relative mt-[35px] justify-center items-center mx-auto ">
          <div className="w-[950px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
          <div className="w-[140px] h-[0px] left-[150px] top-[-1px] absolute border-2 border-gray-800" />
        </div>
      </div>
      <div className="w-[963px] h-[830px] left-[72px] top-[120px] absolute flex flex-row flex-wrap gap-[20px] overflow-y-auto scrollbar-hide">
        {expCards.map((card) => (
          <MyExpCard key={card.experienceId} {...card} /> // 데이터를 MyExpCard 컴포넌트에 전달
        ))}
      </div>
    </div>
  )
}

export default MyExpList
