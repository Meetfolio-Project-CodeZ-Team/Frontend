'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
interface CovletCard {
  question: string
  answer: string
  coverLetterId: number
  createdAt: string
}

const MyBoard = () => {
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
    <div className="w-[1120px] h-[1267px] relative">
      <div className="w-[1120px] h-[982px] left-0 top-0 absolute bg-gray-50" />
      <div className="w-[962px] h-[0px] left-[65px] top-[170px] absolute">
        <div className="w-[962px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[75px] h-[0px] left-0 top-[-1px] absolute border-2 border-gray-800" />
      </div>
      <div className="w-[312px] h-[30px] left-[82px] top-[129px] absolute justify-start items-center gap-[60px] inline-flex">
        <div className="text-gray-900 text-xl font-bold leading-[30px]">
        <Link href="/mypage/myboard">내 글</Link>
        </div>
        <div className="text-gray-900 text-xl font-bold leading-[30px]">
        <Link href="/mypage/mylike">좋아요한 글</Link>
        </div>
        <div className="text-gray-900 text-xl font-bold leading-[30px]">
        <Link href="/mypage/mycomment">내 댓글</Link>
        </div>
      </div>
      <div className="w-[120px] h-[18px] left-[68px] top-[65px] absolute text-gray-900 text-[28px] font-bold font-['Rubik'] leading-[30px]">
        커뮤니티
      </div>
    </div>
  )
}

export default MyBoard
