'use client'
import { boardDataState } from '@/app/recoil/board'
import Pencil from '@/app/ui/svg/Pencil'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import BoardHeader from '../BoardHeader'
import GroupBoardContainer from './GroupBoardContainer'
import JobBoardContainer from './JobBoardContainer'

interface BoardContainerProps {
  nickname?: string
  profile?: string
}

const BoardContainer = ({ nickname, profile }: BoardContainerProps) => {
  const [isJob, setIsJob] = useState(true)
  const [boardData, setBoardData] = useRecoilState(boardDataState)
  const path = isJob ? 'employment' : 'group'
  const router = useRouter()

  return (
    <div className="flex flex-col w-[920px] pl-[62px] pr-6 pt-6 relative">
      <BoardHeader isJob={isJob} setIsJob={setIsJob} />
      {isJob ? (
        <JobBoardContainer boardData={boardData} />
      ) : (
        <GroupBoardContainer boardData={boardData} />
      )}

      <div className="flex w-full flex-row-reverse pt-6 pr-12 absolute top-[880px] right-6 cursor-pointer">
        <div
          className="flex items-center w-[90px] px-1 h-10 text-white font-semibold bg-[#486283] rounded-[10px] justify-center gap-x-2"
          onClick={() =>
            router.push(`/board/post/${path}?nickname=${nickname}`)
          }
        >
          글쓰기
          <Pencil />
        </div>
      </div>
    </div>
  )
}

export default BoardContainer
