'use client'
import { useState } from 'react'
import Input from '../../common/Input'
import Icons from '../../common/Icons'
import { search } from '@/app/ui/IconsPath'

const SearhBoardInfo = () => {
  const [title, setTitle] = useState('')

  return (
    <div className="flex w-[342px] pl-2 gap-x-3 rounded-[18px] border-[1px] border-solid border-black items-center">
      <Icons name={search} />
      <Input type={'search'} onChange={(e) => setTitle(e.target.value)} />
    </div>
  )
}

export default SearhBoardInfo
