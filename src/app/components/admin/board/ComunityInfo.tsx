import React from 'react'
import Icons from '../../common/Icons'
import { boardDelete } from '@/app/ui/IconsPath'

interface ComunityInfoProps {
  createdAt: string
  memberName: string
  title: string
  boardId: number
  type: string
}

const ComunityInfo = (userInfo: ComunityInfoProps) => {
  const { createdAt, memberName, title, type } = userInfo
  return (
    <div className="flex flex-col w-[1034px] h-[50px]">
      <div className="flex w-[1034px] h-[50px] pl-2 border-b border-[#BDBDBD] items-center text-black text-lg">
        <div className="w-[121px] text-center">{createdAt}</div>
        <div className="w-[228px] text-center">{memberName}</div>
        <div className="w-[278px] text-center">{type}</div>
        <div className="w-[145px] text-center">{title}</div>
        <div className="ml-[168px] flex text-center cursor-pointer">
          <Icons name={boardDelete} />
        </div>
      </div>
    </div>
  )
}

export default ComunityInfo
