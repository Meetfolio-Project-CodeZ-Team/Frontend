'use client'
import React, { useState } from 'react'
import BoardHeader from '../BoardHeader'
import GroupBoardContainer from './GroupBoardContainer'
import Button from '../../common/Button'
import JobBoardContainer from './JobBoardContainer'
import { boardDataState } from '@/app/recoil/board'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/navigation'

const BoardContainer = () => {
  const [isJob, setIsJob] = useState(true)
  const [boardData, setBoardData] = useRecoilState(boardDataState)
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
          onClickHandler={() => router.push('/board/post')}
        />
      </div>
    </div>
  )
}

export default BoardContainer
