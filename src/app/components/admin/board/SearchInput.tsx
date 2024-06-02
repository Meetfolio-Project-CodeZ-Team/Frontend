'use client'
import { userState } from '@/app/recoil/admin'
import { search } from '@/app/ui/IconsPath'
import { useState } from 'react'
import { SetterOrUpdater, useRecoilState } from 'recoil'
import Icons from '../../common/Icons'
import Input from '../../common/Input'

interface SearchInputProps {
  searchBoard?: SetterOrUpdater<ResponseBoardData>
  searchUser?: boolean
}

const SearchInput = ({ searchBoard, searchUser }: SearchInputProps) => {
  const [title, setTitle] = useState('')
  const [userData, setUserData] = useRecoilState(userState)

  const getKeywordBoard = async (title: string) => {
    const response = await fetch(
      searchBoard
        ? `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board?keyword=${title}&page=${0}`
        : `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/user/search?keyword=${title}`,
    )
    const resData = await response.json()
    searchBoard && searchBoard(resData.result)
    searchUser && setUserData(resData.result)
  }

  return (
    <div className="flex w-[300px] px-4 gap-x-3 rounded-[18px] border-[1px] border-solid border-black items-center">
      <Input
        className="w-[200px]"
        type={'search'}
        onChange={(e) => setTitle(e.target.value)}
        onEnterPress={() => getKeywordBoard(title)}
      />
      <div className="cursor-pointer">
        <Icons name={search} onClick={() => getKeywordBoard(title)} />
      </div>
    </div>
  )
}

export default SearchInput
