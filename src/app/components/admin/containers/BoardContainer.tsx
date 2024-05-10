'use client'
import ComunityBoard from '@/app/components/admin/board/ComunityBoard'
import { Board } from '@/app/constants/auth'
import { useEffect, useState } from 'react'
import SearhBoard from '../board/SearhBoardInfo'
import DropDownB from '../common/DropDownB'

interface BoardContainerProps {
  boardList: ResponseBoardData[]
}

const BoardContainer = ({ boardList }: BoardContainerProps) => {
  const [boardData, setBoardData] = useState<ResponseBoardData[]>([])
console.log(boardData, '가져온 게시판 데이터');

  useEffect(() => {
    setBoardData(boardList)
  }, [boardList])

  const getKeywordBoard = async (selectedBoard: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/user?jobKeyword=${selectedBoard}`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch user data')
      }
      const boardData = await response.json()
      setBoardData(boardData.result)
    } catch (error) {
      console.error('Error fetching user data:', error)
    }
  }

  return (
    <div className="flex flex-col gap-y-9 bg-white w-[full] pl-[54px] pt-[27px] pb-[60px]">
      <div className="text-[32px] font-bold leading-[48px]">커뮤니티 관리</div>
      <div className="flex items-center w-[1013px] justify-between">
        <SearhBoard />
        <DropDownB
          options={Board}
          title={'전체'}
          onSelect={() => console.log('클릭')}
        />
      </div>
      <ComunityBoard boardList={boardData} />
    </div>
  )
}

export default BoardContainer
