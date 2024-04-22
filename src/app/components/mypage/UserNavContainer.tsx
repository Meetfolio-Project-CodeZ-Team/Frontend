import Link from 'next/link'
import React from 'react'

interface UserNavContainerProps {
  selected: SelectedUserOption
}

const UserNavContainer = ({ selected }: UserNavContainerProps) => {
  return (
    <div className="flex flex-col w-[320px] pl-[53px] pt-[84px] shadow-lg">
      <div className="flex items-center mb-[60px] gap-x-4">
        <div className="w-12 h-12 bg-[#486284] rounded-[100px]"></div>
        <div className="text-[25px] font-semibold">User</div>
      </div>
      <div className="flex flex-col gap-y-8 text-[22px] font-normal leading-[33px]">
        <Link
          className={`${selected === 'portfolio' && 'font-bold'}`}
          href="/Admin"
        >
          포트폴리오
        </Link>
        <Link
          className={`${selected === 'board' && 'font-bold'}`}
          href="/Admin/board"
        >
          커뮤니티 관리
        </Link>
        <Link
          className={`${selected === 'points' && 'font-bold'}`}
          href="/Admin/points"
        >
          포인트
        </Link>
        <Link
          className={`${selected === 'user' && 'font-bold'}`}
          href="/Admin/user"
        >
          개인 정보 설정
        </Link>
      </div>
    </div>
  )
}

export default UserNavContainer