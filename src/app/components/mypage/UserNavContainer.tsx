import Link from 'next/link'

import Image from 'next/image'
import { PROFILE_EMOJI } from '@/app/constants/signup'

interface UserNavContainerProps {
  selected: SelectedUserOption
  nickname?: string
  isGuest?: string
  profile?: string
}

const UserNavContainer = ({
  selected,
  nickname,
  isGuest,
  profile,
}: UserNavContainerProps) => {
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

      {isGuest === 'true' ? (
        <div className="flex flex-col gap-y-8 text-[22px] font-normal leading-[33px]">
          <div>포트폴리오</div>
        </div>
      ) : (
        <div className="flex flex-col gap-y-8 text-[22px] font-normal leading-[33px]">
          <Link
            className={`${selected === 'portfolio' && 'font-bold'}`}
            href="/mypage"
          >
            포트폴리오
          </Link>
          <Link
            className={`${selected === 'board' && 'font-bold'}`}
            href="/mypage/myboard"
          >
            커뮤니티
          </Link>
          <Link
            className={`${selected === 'points' && 'font-bold'}`}
            href="/mypage/mypoint"
          >
            포인트
          </Link>
          <Link
            className={`${selected === 'user' && 'font-bold'}`}
            href="/mypage/userinfo"
          >
            개인 정보 설정
          </Link>
        </div>
      )}
    </div>
  )
}

export default UserNavContainer
