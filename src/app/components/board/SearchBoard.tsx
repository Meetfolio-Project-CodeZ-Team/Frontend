'use client'
import { useState } from 'react'
import { search } from '@/app/ui/IconsPath'
import Icons from '../common/Icons'
import Input from '../common/Input'

const SearchBoard = () => {
  const [title, setTitle] = useState('')

  return (
    <div className="flex w-[250px] gap-x-2 pl-2 h-8 rounded-[18px] items-center bg-white">
      <Icons name={search} />
      <Input
        type={'search'}
        onChange={(e) => setTitle(e.target.value)}
        className="w-[180px] text-base"
      />
    </div>
  )
}

export default SearchBoard
