'use client'
import ComunityBoard from '@/app/components/admin/board/ComunityBoard'
import { Board } from '@/app/constants/auth'
import { useEffect, useState } from 'react'
import SearhBoard from '../board/SearhBoardInfo'
import DropDownB from '../common/DropDownB'

const BoardContainer = () => {
  const [boardData, setBoardData] = useState<ResponseBoardData | null>(null)
  console.log(boardData)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board`,
      )
      const resData = await response.json()
      setBoardData(resData.result)
    }
    fetchData()
  }, [])

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
      <ComunityBoard />
    </div>
  )
}

export default BoardContainer
