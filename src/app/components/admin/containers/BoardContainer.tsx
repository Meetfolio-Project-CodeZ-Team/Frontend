'use client'
import ComunityBoard from '@/app/components/admin/board/ComunityBoard'
import { Board } from '@/app/constants/auth'
import { useEffect, useState } from 'react'
import SearhBoard from '../board/SearchInput'
import DropDownB from '../common/DropDownB'

interface BoardContainerProps {
  boardList: ResponseBoardData[]
}

const BoardContainer = ({ boardList }: BoardContainerProps) => {
  const [boardData, setBoardData] = useState<ResponseBoardData[]>([])
  const [boardType, setBoardType] = useState('')
  console.log(boardType, '선택한 게시판 타입')

  useEffect(() => {
    setBoardData(boardList)
  }, [boardList])

  return (
    <div className="flex flex-col gap-y-9 bg-white w-[full] pl-[54px] pt-[27px] pb-[60px]">
      <div className="text-[28px] font-bold">커뮤니티 관리</div>
      <div className="flex items-center w-[1013px] justify-between">
        <SearhBoard searchBoard={setBoardData} />
        <DropDownB options={Board} title={'전체'} setBoardType={setBoardType} />
      </div>
      <ComunityBoard boardList={boardData} boardType={boardType} />
    </div>
  )
}

export default BoardContainer
