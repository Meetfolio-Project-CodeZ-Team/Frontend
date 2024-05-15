'use client'
import { search } from '@/app/ui/IconsPath'
import { Dispatch, SetStateAction, useState } from 'react'
import Icons from '../../common/Icons'
import Input from '../../common/Input'

interface SearchInputProps {
  searchBoard?: Dispatch<SetStateAction<ResponseBoardData[]>>
  searchUser?: Dispatch<SetStateAction<ResponseUser | null>>
}

const SearchInput = ({ searchBoard, searchUser }: SearchInputProps) => {
  const [title, setTitle] = useState('')

  const getKeywordBoard = async (title: string) => {
    const response = await fetch(
      searchBoard
        ? `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board?keyword=${title}`
        : `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/user/search?keyword=${title}`,
    )
    const resData = await response.json()
    console.log(resData, 'res요청 성공')

    searchBoard && searchBoard(resData.result.boardInfo)
    searchUser && searchUser(resData.result)
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

export default SearchInput
