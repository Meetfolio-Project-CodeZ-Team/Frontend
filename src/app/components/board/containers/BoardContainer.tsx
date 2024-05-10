'use client'
import { boardDataState } from '@/app/recoil/board'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Button from '../../common/Button'
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

      <div className="flex w-full flex-row-reverse pt-6 pr-12 absolute top-[880px] right-6">
        <Button
          buttonText={'글쓰기'}
          type={'addBoardBtn'}
          isDisabled={false}
          onClickHandler={() =>
            router.push(`/board/post/${path}?nickname=${nickname}`)
          }
        />
      </div>
    </div>
  )
}

export default BoardContainer
