import Link from 'next/link'

interface OtherUserNavProps {
  nickname: string
}

const OtherUserNav = ({ nickname }: OtherUserNavProps) => {
  return (
    <div className="flex flex-col w-[320px] pl-[53px] pt-[84px] shadow-lg">
      <div className="flex items-center mb-[60px] gap-x-4">
        <div className="w-12 h-12 bg-[#486284] rounded-[100px]"></div>
        <div className="text-[25px] font-semibold">{nickname}</div>
      </div>
      <div className="flex flex-col gap-y-8 text-[22px] font-normal leading-[33px]">
        <Link className="font-bold" href="/mypage">
          포트폴리오
        </Link>
      </div>
    </div>
  )
}

export default OtherUserNav
