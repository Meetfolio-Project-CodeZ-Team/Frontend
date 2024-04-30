'use client'

import { useEffect, useState } from 'react'
import MyCovletCard from './MyCovletCard'
import Link from 'next/link'

const PointChargeContainer = () => {
  return (
    <div className="w-[1120px] h-[981px] relative">
      <div className="w-[1120px] h-[981px] left-0 top-0 absolute bg-gray-50" />
      <div className="w-[981px] h-32 left-[70px] top-[130px] absolute">
        <div className="w-[981px] h-32 left-0 top-0 absolute bg-slate-600 rounded-[5px]" />
        <div className="w-[93.84px] h-[75px] left-[42px] top-[26px] absolute">
          <div className="w-[76.24px] left-0 top-0 absolute text-white text-xl font-medium leading-[30px]">
            내 포인트
          </div>
          <div className="w-[93.53px] left-[0.32px] top-[30px] absolute text-white text-3xl font-bold leading-[45px]">
            1000P
          </div>
        </div>
      </div>
      <div className="w-[962px] h-[0px] left-[75px] top-[342px] absolute">
        <div className="w-[962px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        <div className="w-[100px] h-[0px] left-[110px] top-[1.42px] absolute border-2 border-gray-800" />
      </div>
      <div className="w-[962px] h-[510px] left-[76px] top-[342px] absolute flex-col justify-start items-start gap-3 inline-flex">
        <div className="w-[962px] h-[0px] relative">
          <div className="w-[962px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
        </div>
        <div className="h-[39px] relative">
          <div className="w-[917px] h-[27px] left-0 top-0 absolute justify-between items-center inline-flex">
            <div className="w-[115px]">
              <span className="text-black text-lg font-semibold leading-[27px]">
                {' '}
                충전일{' '}
              </span>
              <span className="text-black text-lg font-medium leading-[27px]">
                {' '}
              </span>
            </div>
            <div className="text-black text-lg font-normal leading-[27px]">
              충전 포인트
            </div>
            <div className="text-black text-lg font-normal leading-[27px]">
              충전 금액{' '}
            </div>
            <div className="text-black text-lg font-normal leading-[27px]">
              보유 포인트
            </div>
          </div>
          <div className="w-[962px] h-[0px] left-0 top-[39px] absolute border border-zinc-600"></div>
        </div>
        <div className="h-[39px] relative">
          <div className="w-[917px] h-[27px] left-0 top-0 absolute justify-between items-center inline-flex">
            <div>
              <span className="text-black text-lg font-normal leading-[27px]">
                {' '}
              </span>
              <span className="text-black text-lg font-medium leading-[27px]">
                {' '}
              </span>
              <span className="text-black text-lg font-semibold leading-[27px]">
                2024-01-01
              </span>
            </div>
            <div className="text-black text-lg font-normal leading-[27px]">
              충전 포인트
            </div>
            <div className="text-black text-lg font-normal leading-[27px]">
              충전 금액{' '}
            </div>
            <div className="text-black text-lg font-normal leading-[27px]">
              보유 포인트
            </div>
          </div>
          <div className="w-[962px] h-[0px] left-0 top-[39px] absolute border border-stone-300"></div>
        </div>
      </div>
      <div className="w-[91px] h-[5px] left-[87px] top-[295px] absolute text-black text-xl font-bold leading-[30px]">
        <Link href="/mypage/mypoint">사용 내역</Link>
      </div>
      <div className="left-[201px] top-[295px] absolute text-black text-xl font-bold leading-[30px]">
        <Link href="/mypage/pointcharge">충전 내역</Link>
      </div>
      <div className="w-52 h-[54.45px] left-[799px] top-[165px] absolute">
        <div className="left-[71.16px] top-[10.93px] absolute text-white text-xl font-semibold leading-[30px]">
          충전하기
        </div>
      </div>
      <div className="w-[105.75px] h-[18px] left-[70.39px] top-[82.68px] absolute text-gray-900 text-[28px] font-bold font-['Rubik'] leading-[30px]">
        포인트
      </div>
    </div>
  )
}

export default PointChargeContainer
