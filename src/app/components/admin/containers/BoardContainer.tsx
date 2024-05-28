'use client'
import ComunityBoard from '@/app/components/admin/board/ComunityBoard'
import { Board } from '@/app/constants/auth'
import { boardState } from '@/app/recoil/admin'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import SearhBoard from '../board/SearchInput'
import DropDownB from '../common/DropDownB'

const BoardContainer = () => {
  const [boardData, setBoardData] = useRecoilState(boardState)
  const [boardType, setBoardType] = useState('')

  const initBoard = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board?page=0`,
    )
    const resData = await response.json()
    setBoardData(resData?.result)
  }

  return (
    <div className="flex flex-col gap-y-9 bg-white w-[full] pl-[54px] pt-[27px] pb-[60px]">
      <div className="text-[28px] font-bold cursor-pointer" onClick={initBoard}>
        커뮤니티 관리
      </div>
      <div className="flex items-center w-[1013px] justify-between">
        <SearhBoard searchBoard={setBoardData} />
        <DropDownB options={Board} title={'전체'} setBoardType={setBoardType} />
      </div>
      {boardData && <ComunityBoard boardType={boardType} />}
    </div>
  )
}

export default BoardContainer
