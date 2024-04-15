interface PaymentAnalProps {
  year: string
  month: string
  totalSales: string
}
const PaymentAnal = (paymentAnal: PaymentAnalProps) => {
  const { year, month, totalSales } = paymentAnal
  return (
    <div className="flex flex-col items-center gap-y-8 mt-[62px]">
      <div className="text-[40px] font-bold">
        {year}년 {month}월
      </div>
      <div className="flex items-center w-[949px] justify-center text-white text-[23px] font-bold h-[auto] rounded-[5px] bg-black py-[10px]">
        총 월 매출 {totalSales} 원
      </div>
    </div>
  )
}

export default PaymentAnal
