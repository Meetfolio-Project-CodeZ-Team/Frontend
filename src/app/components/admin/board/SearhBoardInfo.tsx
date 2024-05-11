'use client'
import { search } from '@/app/ui/IconsPath'
import { Dispatch, SetStateAction, useState } from 'react'
import Icons from '../../common/Icons'
import Input from '../../common/Input'

interface SearchBoardInfoProps {
  searchBoard: Dispatch<SetStateAction<ResponseBoardData[]>>
}

const SearhBoardInfo = ({ searchBoard }: SearchBoardInfoProps) => {
  const [title, setTitle] = useState('')

  const getKeywordBoard = async (title: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board?keyword=${title}`,
    )
    const boardData = await response.json()
    searchBoard(boardData.result)
  }

  return (
    <div className="flex w-[300px] px-4 gap-x-3 rounded-[18px] border-[1px] border-solid border-black items-center">
      <Input
        className="w-[200px]"
        type={'search'}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className="cursor-pointer">
        <Icons name={search} onClick={() => getKeywordBoard(title)} />
      </div>
    </div>
  )
}

export default SearhBoardInfo
