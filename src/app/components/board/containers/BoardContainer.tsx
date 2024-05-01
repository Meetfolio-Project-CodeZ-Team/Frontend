import React, { useState } from 'react'
import BoardHeader from '../BoardHeader'
import JobBoardContainer from './JobBoardContainer'

const BoardContainer = () => {
  const [isJob, setIsJob] = useState(false)

  return (
    <div className="flex flex-col w-[860px] pl-[62px] pt-6">
      <BoardHeader isJob={isJob} setIsJob={setIsJob} />
      <JobBoardContainer />
    </div>  
  )
}

export default BoardContainer
