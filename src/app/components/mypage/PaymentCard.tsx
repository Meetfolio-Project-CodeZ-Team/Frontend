
interface PaymentCardProps {
  createdAt: string
  payment: number
  point: number
  totalPoint: number
}

interface CovletCardDetail {
  shareType: string
  question: string
  answer: string
  coverLetterId: number
  keyword1: string
  keyword2: string
  jobKeyword: string
  
}

const PaymentCard = ({
  createdAt,
  payment,
  point,
  totalPoint,
}: PaymentCardProps) => {


  return (
    <div className="flex gap-[218px] items-center w-full h-[59px] py-[2px] border-b border-stone-400 mt-[0px]">
      <div className="text-black text-lg font-semibold leading-snug absolute left-[10px] w-[170px] text-start">
        {createdAt}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[300px] text-center w-[150px]">
        {point}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute text-center left-[605px] w-[130px]">
        {payment}
      </div>
      <div className="text-black text-lg font-normal leading-snug absolute left-[915px] text-center w-[100px]">
        {totalPoint}
      </div>
    </div>
  )
}
export default PaymentCard
