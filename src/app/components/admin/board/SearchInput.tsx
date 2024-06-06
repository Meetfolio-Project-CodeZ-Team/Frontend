'use client'
import { boardState, userState } from '@/app/recoil/admin'
import { search } from '@/app/ui/IconsPath'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Icons from '../../common/Icons'
import Input from '../../common/Input'

interface SearchInputProps {
  searchUser?: boolean
  guideText?: string
}

const SearchInput = ({ searchUser, guideText }: SearchInputProps) => {
  const [title, setTitle] = useState('')
  const [userData, setUserData] = useRecoilState(userState)
  const [boardData, setBoardData] = useRecoilState(boardState)

  const getKeywordBoard = async (title: string) => {
    const response = await fetch(
      searchUser
        ? `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/user/search?keyword=${title}`
        : `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board?keyword=${title}&page=${0}`,
    )
    const resData = await response.json()
    searchUser ? setUserData(resData.result) : setBoardData(resData.result)
  }

  return (
    <div className="flex w-[300px] px-4 gap-x-3 rounded-[18px] border-[1.5px] border-black items-center">
      <Input
        className="w-[200px]"
        type={'search'}
        onChange={(e) => setTitle(e.target.value)}
        onEnterPress={() => getKeywordBoard(title)}
        placeholder={guideText}
      />
      <div className="cursor-pointer">
        <Icons name={search} onClick={() => getKeywordBoard(title)} />
      </div>
    </div>
  )
}

export default SearchInput
