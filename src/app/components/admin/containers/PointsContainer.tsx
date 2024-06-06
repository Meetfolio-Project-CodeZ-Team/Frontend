'use client'
import { MONTH, POINT_ANAL, YEAR } from '@/app/constants/admin'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import CalendarDropDown from '../point/CalendarDropDown'
import PointAnalDetail from '../point/PointAnalDetail'

const PointsContainer = () => {
  const [isPoint, setIsPoint] = useState(true)
  const [year, setYear] = useState('2024')
  const [month, setMonth] = useState('5')
  const [pointData, setPointData] = useState<ResponsePoint | null>(null)
  const [paymentData, setPaymentData] = useState<ResponsePayment | null>(null)

  const PaymentAnal = dynamic(() => import('../point/PaymentAnal'))

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/${isPoint ? 'point' : 'payment'}?year=${year}&month=${month}`,
      )
      const resData = await response.json()
      if (isPoint) {
        setPointData(resData.result)
      } else {
        setPaymentData(resData.result)
      }
    }
    fetchData()
  }, [isPoint, year, month])

  return (
    <div className="flex flex-col bg-white w-[full] pl-[54px] pt-[27px] pb-[44px]">
      <div className="text-[28px] font-bold  mb-7">매출 관리</div>
      <div className="flex w-[962px] justify-between relative">
        <div className=" flex w-[auto] gap-x-[60px] text-xl font-bold pl-4 pb-2">
          <div className=" cursor-pointer" onClick={() => setIsPoint(true)}>
            {POINT_ANAL[0]}
          </div>
          <div className=" cursor-pointer" onClick={() => setIsPoint(false)}>
            {POINT_ANAL[1]}
          </div>
        </div>
        <div className="flex gap-x-0.5 mt-4 text-xl">
          <CalendarDropDown
            options={YEAR}
            title={'년'}
            onSelect={(tag) => setYear(tag)}
          />
          <CalendarDropDown
            options={MONTH}
            title={'월'}
            onSelect={(tag) => setMonth(tag)}
          />
        </div>
      </div>
      <div
        className={`w-[170px] ${!isPoint && `ml-[180px]`} h-[0px] border-2 border-zinc-600`}
      ></div>
      <div className="w-[962px] h-[0px] border border-[#616161]"></div>
      <div className="flex w-[1013px]">
        {isPoint ? (
          <PointAnalDetail
            feedBack={pointData?.coverLetterPoint || 0}
            analysis={pointData?.analysisPoint || 0}
            total={pointData?.totalPoint || 0}
            year={year}
            month={month}
            setYear={setYear}
            setMonth={setMonth}
          />
        ) : (
          <PaymentAnal
            year={year}
            month={month}
            totalSales={paymentData?.totalSales || 0}
            paymentList={paymentData?.paymentInfo.paymentList || []}
            setYear={setYear}
            setMonth={setMonth}
          />
        )}
      </div>
    </div>
  )
}

export default PointsContainer
