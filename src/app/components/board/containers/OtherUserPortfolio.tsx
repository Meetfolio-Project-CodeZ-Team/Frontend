'use client'

import Pencil from '@/app/ui/svg/pencil'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MyCovletCard from '../../mypage/MyCovletCard'

interface OtherUserPortfolioProps {
  username: string
}

const OtherUserPortfolio = ({ username }: OtherUserPortfolioProps) => {
  const [covletCards, setCovletCards] = useState<CovletCard[]>([])
  const [expCard, setExpCards] = useState<ExpCard[]>([])
  const [isExp, setIsExp] = useState(false)
  const path = isExp ? 'expcard' : 'coverletter'

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`/api/userpage/${path}?id=${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await response.json()
      console.log(data)

      //   setCovletCards(data.result.list)
    }
    getData()
  }, [])

  return (
    <div className="w-full h-[1090px] relative">
      <div className="w-full h-[979px] left-0 top-0 absolute bg-gray-50 " />
      <div className="w-full h-[0px] left-[65px] top-[170px] absolute">
        <div className="w-[1080px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div
          className={`w-[145px] h-[0px] left-0 top-[-0.6px] absolute border-[3px] border-gray-800 ${isExp ? 'ml-[155px]' : ''}`}
        />
      </div>
      <div className="w-[1060px] h-[30px] left-[82px] top-[129px] absolute flex justify-between items-center">
        <div className="flex gap-[60px]">
          <div
            className="text-gray-900 text-xl font-bold leading-[30px] cursor-pointer"
            onClick={() => setIsExp(false)}
          >
            내 자기소개서
          </div>
          <div
            className="text-gray-900 text-xl font-bold leading-[30px] cursor-pointer"
            onClick={() => setIsExp(true)}
          >
            내 경험카드
          </div>
        </div>
        <div className="flex items-center justify-start gap-2 bg-blue-100 p-2 rounded-[10px]">
          <Pencil />
          <span className="text-black text-sm font-semibold">
            <Link href="/coverletter">자기소개서 작성하러 가기</Link>
          </span>
        </div>
      </div>
      <div className="w-[1150px] h-[750px] mt-[200px] flex flex-col absolute overflow-y-auto scrollbar-hide">
        <div className="w-[500px] h-full ml-[60px] gap-[20px]">
          {covletCards.length > 0 ? (
            covletCards.map((a) => (
              <MyCovletCard key={a.coverLetterId} {...a} />
            ))
          ) : (
            <div className="w-[1060px] h-[500px] flex items-center justify-center mt-[40px] ">
              <div className="text-center">
                <p className="text-xl font-semibold">
                  아직 작성한 자기소개서가 없네요!
                </p>
                <button className="mt-4 p-3 bg-blue-300 text-black rounded-[10px] font-semibold">
                  <Link href="/coverletter">자기소개서 작성하러 가기</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-[200px] h-[18px] left-[68px] top-[65px] absolute text-gray-900 text-[28px] font-bold font-['Rubik'] leading-[30px]">
        포트폴리오
      </div>
    </div>
  )
}

export default OtherUserPortfolio
