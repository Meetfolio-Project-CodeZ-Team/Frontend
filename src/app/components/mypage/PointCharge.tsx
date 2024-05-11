'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import PointCard from './PointCard'
import PaymentCard from './PaymentCard'
import Icons from '../common/Icons'
import { pointW } from '@/app/ui/IconsPath'

interface UserInfoProps {
  email: string
  grade: string
  major: string
  jobKeyword: onlyJobType
  memberId?: number
  point: number
  status: string
  registrationDate: string
}

interface UserPoint {
  myPoint: number
}

interface UserPaymentProps {
  createdAt: string
  payment: number
  point: number
  totalPoint: number
}

const PointCharge = () => {
  const [userInfos, setUserInfos] = useState<UserPoint>()
  const [userPayments, setUserPayments] = useState<UserPaymentProps[]>([])

  useEffect(() => {
    // 서버에서 자소서카드 데이터를 가져오는 함수
    const fetchUserInfos = async () => {
      try {
        const response = await fetch('/api/mypage/mypayment')
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        console.log('유저 정보 데이터', data.result.paymentInfo) // 타입 에러가 발생하지 않아야 함
        setUserInfos(data.result.paymentInfo)
      } catch (error) {
        console.error(error)
      }
    }

    const fetchUserPayment = async () => {
      try {
        const response = await fetch('/api/mypage/mypayment')
        if (!response.ok) {
          throw new Error('서버에서 데이터를 가져오는 데 실패했습니다.')
        }
        const data = await response.json()
        console.log(
          '유저 충전 내역 데이터',
          data.result.paymentInfo.paymentList,
        ) // 타입 에러가 발생하지 않아야 함

        setUserPayments(data.result.paymentInfo.paymentList)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUserInfos()
    fetchUserPayment()
  }, [])

  return (
    <div className="w-full h-[1090px] relative">
      <div className="w-full h-full left-0 top-0 absolute bg-gray-50" />
      <div className="w-[1070px] h-32 left-[70px] top-[130px] absolute">
        <div className="w-[1070px] h-32 left-0 top-0 absolute bg-slate-600 rounded-[5px]" />
        <div className="w-[300px] h-[75px] left-[42px] top-[26px] absolute">
          <div className="w-[280px] left-0 top-0 absolute text-white text-xl font-medium leading-[30px]">
            내 포인트
          </div>
          <div className="w-[93.53px] left-[0.32px] top-[30px] absolute text-white text-3xl font-bold leading-[45px]">
            {userInfos?.myPoint}P
          </div>
        </div>
      </div>

      <div className="w-[1070px] h-[510px] left-[76px] top-[342px] absolute flex-col justify-start items-start gap-3 inline-flex">
        <div className="w-[1070px] h-[0px] relative">
          <div className="w-[1065px] h-[0px] left-0 top-0 absolute border border-zinc-600"></div>
          <div className="w-[100px] h-[0px] left-[110px] top-[-0.5px] absolute border-2 border-gray-800" />
        </div>
        <div className="h-[39px] relative">
          <div className="w-full h-[27px]  top-0 absolute gap-[218px] items-center inline-flex">
            <div className="text-black text-lg font-semibold leading-[27px] absolute left-[8px] w-[170px] text-center">
              충전 일시
            </div>
            <div className="text-black text-lg font-normal leading-[27px] absolute left-[300px] w-[150px] text-center">
              충전 포인트
            </div>
            <div className="text-black text-lg font-normal leading-[27px]  text-center absolute left-[618px] w-[100px]">
              충전 금액
            </div>
            <div className="text-black text-lg font-normal leading-[27px] text-center absolute left-[914px] w-[100px]">
              보유 포인트
            </div>
          </div>
          <div className="w-[1065px] h-[0px] left-0 top-[39px] absolute border border-zinc-600"></div>
        </div>
      </div>
      <div className="w-[1060px] h-[850px] left-[76px] mt-[398px] flex flex-col absolute overflow-y-auto scrollbar-hide">
        <div className="w-full h-full ml-[0px] gap-[10px] flex flex-col">
          {userPayments.map((a) => (
            <PaymentCard key={a.createdAt} {...a} />
          ))}
        </div>
      </div>
      <div className="w-[91px] h-[5px] left-[87px] top-[295px] absolute text-black text-xl font-bold leading-[30px]">
        <Link href="/mypage/mypoint">사용 내역</Link>
      </div>
      <div className="left-[201px] top-[295px] absolute text-black text-xl font-bold leading-[30px]">
        <Link href="/mypage/pointcharge">충전 내역</Link>
      </div>
      <div className="w-52 h-[54.45px] left-[900px] top-[160px] absolute items-center justify-center">
        <div className="w-[200px] left-0 top-[10.93px] absolute h-[50px] items-center justify-center text-white border-2 border-white text-xl font-semibold leading-[30px] rounded-[30px] inline-flex">
          <Icons className="mt-2" name={pointW} />
          충전하기
        </div>
      </div>
      <div className="w-[105.75px] h-[18px] left-[75px] top-[82.68px] absolute text-gray-900 text-[28px] font-bold font-['Rubik'] leading-[30px]">
        포인트
      </div>
    </div>
  )
}

export default PointCharge
