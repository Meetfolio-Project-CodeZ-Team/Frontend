'use client'

import { useEffect, useState } from 'react'
import MyCovletCard from './MyCovletCard'
import Link from 'next/link'
interface CovletCard {
  question: string
  answer: string
  coverLetterId: number
  createdAt: string
}

const PortfolioContainer = () => {
  const [covletCards, setCovletCards] = useState<CovletCard[]>([])

  useEffect(() => {
    // 서버에서 자소서카드 데이터를 가져오는 함수
    const fetchCovletCards = async () => {
      try {
        const response = await fetch('/api/mypage/myCovlet')
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        console.log('자소서 데이터', data) // 타입 에러가 발생하지 않아야 함
        setCovletCards(data.result.list)
      } catch (error) {
        console.error(error)
      }
    }

    fetchCovletCards()
  }, [])

  console.log(covletCards, '자소서 목록 정보')

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
        <div className="w-[963px] h-[830px] mt-[80px] flex flex-col absolute overflow-y-auto scrollbar-hide">
          <div className="w-[350px] h-full ml-[0px] gap-[20px]">
            {covletCards.map((a) => (
              <MyCovletCard key={a.coverLetterId} {...a} /> // 데이터를 MyExpCard 컴포넌트에 전달
            ))}
          </div>
        </div>
        <div className="w-[1100px] h-[1.42px] relative mt-[35px] justify-center items-center mx-auto ">
          <div className="w-[950px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
          <div className="w-[140px] h-[0px] left-0 top-[-1px] absolute border-2 border-gray-800" />
        </div>
      </div>
    </div>
  )
}

export default PortfolioContainer
