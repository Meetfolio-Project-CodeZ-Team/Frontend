import Link from 'next/link'
import React from 'react'

interface AdminNavContainerProps {
  selected: SelectedOption
}

const AdminNavContainer = ({ selected }: AdminNavContainerProps) => {
  return (
    <div className="flex flex-col w-[320px] h-[980px] pl-[53px] pt-[84px] shadow-lg">
      <div className="flex items-center mb-[60px] gap-x-4">
        <div className="w-12 h-12 bg-[#486284] rounded-[100px]"></div>
        <div className="text-[25px] font-semibold">관리자</div>
      </div>
      <div className="flex flex-col gap-y-8 text-[22px] font-normal leading-[33px]">
        <Link
          className={`${selected === 'dashboard' && 'font-bold'}`}
          href="/Admin"
        >
          대시보드
        </Link>
        <Link
          className={`${selected === 'user' && 'font-bold'}`}
          href="/Admin/user"
        >
          회원관리
        </Link>
        <Link
          className={`${selected === 'model' && 'font-bold'}`}
          href="/Admin/model"
        >
          AI 관리
        </Link>
        <Link
          className={`${selected === 'points' && 'font-bold'}`}
          href="/Admin/points"
        >
          매출 관리
        </Link>
        <Link
          className={`${selected === 'board' && 'font-bold'}`}
          href="/Admin/board"
        >
          커뮤니티 관리
        </Link>
      </div>
    </div>
  )
}

export default AdminNavContainer
