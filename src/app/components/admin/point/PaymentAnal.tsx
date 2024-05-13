import { PAYMENT_H } from '@/app/constants/admin'
import { Dispatch, SetStateAction } from 'react'
import PointInfo from './PointInfo'

interface PaymentAnalProps {
  year: string
  month: string
  totalSales: number
  paymentList: PaymentListTypes[]
  setYear: Dispatch<SetStateAction<string>>
  setMonth: Dispatch<SetStateAction<string>>
}
const PaymentAnal = (paymentAnal: PaymentAnalProps) => {
  const { year, month, totalSales, paymentList, setYear, setMonth } =
    paymentAnal
  const handleMonthChange = (increment: number) => {
    if (month === '12' && increment === +1) {
      let newMonth = 1
      let newYear = parseInt(year) + increment
      setMonth(newMonth.toString())
      setYear(newYear.toString())
    } else if (month === '1' && increment === -1) {
      let newMonth = 12
      let newYear = parseInt(year) + increment
      setMonth(newMonth.toString())
      setYear(newYear.toString())
    } else {
      let newMonth = parseInt(month) + increment
      setMonth(newMonth.toString())
    }
  }
  console.log(paymentAnal, '결제 내역')

  return (
    <div className="flex flex-col items-center gap-y-6 mt-[28px]">
      <div className=" flex text-[28px] font-bold gap-x-8">
        <div onClick={() => handleMonthChange(-1)} className="cursor-pointer">
          {'<'}
        </div>
        <div>
          {year}년 {month}월
        </div>
        <div onClick={() => handleMonthChange(+1)} className="cursor-pointer">
          {'>'}
        </div>
      </div>
      <div className="flex items-center w-[949px] justify-center text-white text-[20px] font-bold h-[auto] rounded-[5px] bg-black py-[10px]">
        총 월 매출 {totalSales} 원
      </div>
      <div className="flex flex-col w-[962px] h-[530px] mt-[22px] ">
        <div className="flex w-[962px] h-[50px] pl-[72px] border-b border-[#616161] items-center text-black text-lg">
          <div className="font-bold">{PAYMENT_H[0]}</div>
          <div className="ml-[180px] ">{PAYMENT_H[1]}</div>
          <div className="ml-[210px]">{PAYMENT_H[2]}</div>
          <div className="ml-[150px]">{PAYMENT_H[3]}</div>
        </div>
        <div className="flex flex-col h-[480px] overflow-y-auto scrollbar-hide">
          {paymentList.map((point, i) => (
            <PointInfo
              createdAt={point.createdAt}
              email={point.email}
              payment={point.payment}
              point={point.point}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentAnal
