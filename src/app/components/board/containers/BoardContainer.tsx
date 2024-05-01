import React, { useState } from 'react'
import BoardHeader from '../BoardHeader'
import JobBoardContainer from './JobBoardContainer'
import GroupBoardContainer from './GroupBoardContainer'

const BoardContainer = () => {
  const [isJob, setIsJob] = useState(false)

  return (
    <div className="flex flex-col w-[860px] pl-[62px] pt-6">
      <BoardHeader isJob={isJob} setIsJob={setIsJob} />
      <GroupBoardContainer />
    </div>
  )
}

export default BoardContainer
