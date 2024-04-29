'use client'

import { useEffect, useState } from 'react'
import MyCovletCard from './MyCovletCard'
import Link from 'next/link'

const WithDrawContainer = () => {
  return (
    <div className="w-[1120px] h-[981px] relative">
      <div className="w-[1120px] h-[981px] left-0 top-0 absolute bg-gray-50" />
      <div className="w-[962px] h-[0px] left-[79px] top-[172px] absolute">
        <div className="w-[962px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[160px] h-[0px] left-[155px] top-[1.42px] absolute border-2 border-gray-800" />
      </div>
      <div className="w-[280px] h-[30px] left-[96px] top-[131px] absolute justify-start items-center gap-[70px] inline-flex">
        <div className="text-gray-900 text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">
          <Link href="/mypage/userinfo">개인 정보 수정</Link>
        </div>
        <div className="text-gray-900 text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">
          <Link href="/mypage/withdraw">회원 탈퇴</Link>
        </div>
      </div>
      <div className="w-[214px] h-[18px] left-[66px] top-[64px] absolute text-gray-900 text-[28px] font-bold font-['Rubik'] leading-[30px]">
        개인 정보 설정
      </div>
      <div className="left-[84px] top-[231px] absolute">
        <span className="text-black text-xl font-bold font-['Plus Jakarta Sans'] leading-[30px]">
          졍말 탈퇴하시겠어요?
          <br />
        </span>
        <span className="text-black text-xl font-medium font-['Plus Jakarta Sans'] leading-[30px]">
          <br />
          탈퇴 시 모든 이용 내역 및 저장된 포트폴리오가 삭제되며,
          <br />
          <br />
          보유하신 포인트가 소멸됩니다.
        </span>
      </div>

      {/* <div className="w-[95.85px] h-[20.69px] left-[22.58px] top-[11.66px] absolute text-center text-slate-600 text-lg font-semibold font-['Plus Jakarta Sans'] leading-[27px]">
          탈퇴하기
        </div> */}
      <div className="w-[150.05px] h-[50px] left-[895px] top-[504px] absolute bg-slate-300 rounded-[10px] flex items-center justify-center">
        <button className="text-slate-600 text-xl font-semibold border-0 focus:outline-none rounded-[10px]">
          탈퇴하기
        </button>
      </div>
    </div>
  )
}

export default WithDrawContainer
