interface PointInfoProps {
  createdAt: string
  email: string
  payment: number
  point: number
}
const PointInfo = (pointInfo: PointInfoProps) => {
  const { createdAt, email, payment, point } = pointInfo
  return (
    <div className="flex flex-col w-[962px] h-[50px]">
      <div className="flex w-[962px] h-[50px] border-b border-[#BDBDBD] items-center text-lg">
        <div className="w-[208px] text-center">{createdAt}</div>
        <div className="w-[281px] text-center">{email}</div>
        <div className="w-[243px] text-center">{payment}</div>
        <div className="w-[220px] text-center">{point}</div>
      </div>
    </div>
  )
}

export default PointInfo
