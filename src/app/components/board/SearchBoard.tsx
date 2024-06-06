'use client'
import { boardDataState } from '@/app/recoil/board'
import { search } from '@/app/ui/IconsPath'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Icons from '../common/Icons'
import Input from '../common/Input'

interface SearchBoardProps {
  isJob: boolean
}

const SearchBoard = ({ isJob }: SearchBoardProps) => {
  const [title, setTitle] = useState('')
  const [boardData, setBoardData] = useRecoilState(boardDataState)

  const searchPost = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/search?keyword=${title}&type=${isJob ? 'EMPLOYMENT' : 'GROUP'}`,
    )
    const resData = await res.json()
    setBoardData(resData.result)
  }

  return (
    <div className="flex w-[260px] gap-x-2 pr-2 pl-3 h-8 rounded-[18px] items-center bg-white">
      <Input
        type={'search'}
        onChange={(e) => setTitle(e.target.value)}
        className="w-[170px] text-base"
        onEnterPress={searchPost}
      />
      <div className="cursor-pointer" onClick={searchPost}>
        <Icons name={search} />
      </div>
    </div>
  )
}

export default SearchBoard
