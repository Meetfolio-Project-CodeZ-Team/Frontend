import Link from 'next/link'
import React from 'react'

interface AdminNavContainerProps {
  selected: SelectedOption
}

const AdminNavContainer = ({ selected }: AdminNavContainerProps) => {
  return (
    <div className="flex flex-col w-[320px] pl-[53px] min-w-56 pt-[84px] shadow-lg bg-[#DEE5ED] min-h-[759px]">
      <div className="flex items-center mb-[48px] gap-x-2">
        <div className="w-12 h-12 rounded-[100px] text-4xl">👨‍💻</div>
        <div className="text-[25px] font-semibold">관리자</div>
      </div>
      <div className="flex flex-col gap-y-8 text-[22px] font-normal min-h-[509px]">
        <Link
          className={`${selected === 'dashboard' && 'font-bold'}`}
          href="/admin"
        >
          대시보드
        </Link>
        <Link
          className={`${selected === 'user' && 'font-bold'}`}
          href="/admin/user"
        >
          회원관리
        </Link>
        <Link
          className={`${selected === 'model' && 'font-bold'}`}
          href="/admin/model"
        >
          AI 관리
        </Link>
        <Link
          className={`${selected === 'points' && 'font-bold'}`}
          href="/admin/points"
        >
          매출 관리
        </Link>
        <Link
          className={`${selected === 'board' && 'font-bold'}`}
          href="/admin/board"
        >
          커뮤니티 관리
        </Link>
      </div>
    </div>
  )
}

export default AdminNavContainer
