import { PAYMENT_H } from '@/app/constants/admin'
import { mookPoint } from './mookpoint'
import PointInfo from './PointInfo'

interface PaymentAnalProps {
  year: string
  month: string
  totalSales: number
  paymentList: PaymentListTypes[]
}
const PaymentAnal = (paymentAnal: PaymentAnalProps) => {
  const { year, month, totalSales, paymentList } = paymentAnal
  return (
    <div className="flex flex-col items-center gap-y-6 mt-[62px]">
      <div className="text-[40px] font-bold">
        {year}년 {month}월
      </div>
      <div className="flex items-center w-[949px] justify-center text-white text-[23px] font-bold h-[auto] rounded-[5px] bg-black py-[10px]">
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
