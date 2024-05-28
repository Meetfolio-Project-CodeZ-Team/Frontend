import Image from 'next/image'
import { PROFILE_EMOJI } from '@/app/constants/signup'

interface OtherUserNavProps {
  nickname: string
  profile?: string
}

const OtherUserNav = ({ nickname, profile }: OtherUserNavProps) => {
  return (
    <div className="flex flex-col w-[320px] pl-[53px] pt-[84px] shadow-lg">
      <div className="flex items-center mb-[60px] gap-x-4">
      <div className="w-6 h-6">
          <Image
            width={24}
            height={24}
            src={`/Images/Emoji/${PROFILE_EMOJI[PROFILE_EMOJI.indexOf(profile || '')]}.png`}
            alt="logoIcon"
          />
        </div>
        <div className="text-[25px] font-semibold">{nickname}</div>
      </div>
      <div className="flex flex-col gap-y-8 text-[22px] font-semibold leading-[33px]">
        포트폴리오
      </div>
    </div>
  )
}

export default OtherUserNav
