'use client'
import { useState } from 'react'
import { search } from '@/app/ui/IconsPath'
import Icons from '../common/Icons'
import Input from '../common/Input'

const SearchBoard = () => {
  const [title, setTitle] = useState('')

  return (
    <div className="flex w-[260px] gap-x-2 pr-2 pl-3 h-8 rounded-[18px] items-center bg-white">
      <Input
        type={'search'}
        onChange={(e) => setTitle(e.target.value)}
        className="w-[170px] text-base"
      />
      <div className="cursor-pointer">
        <Icons name={search} />
      </div>
    </div>
  )
}

export default SearchBoard
