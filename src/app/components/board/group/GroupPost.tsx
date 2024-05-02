import Like from '@/app/ui/svg/main/Like'
import React from 'react'
import Icons from '../../common/Icons'
import { comment } from '@/app/ui/IconsPath'
import { useRecoilState } from 'recoil'
import { selectedPostId } from '@/app/recoil/board'

interface GroupPostProps {
  data: BoardInfoTypes
}

const GroupPost = ({ data }: GroupPostProps) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)
  console.log(selectedId, '번 게시물 선택 됨')

  return (
    <div
      className="w-[380px] h-[220px] relative bg-white rounded-[10px] cursor-pointer"
      onClick={() => setSelectedId(data.boardId)}
    >
      <div className="absolute left-7 top-5">
        <div className="w-9 h-9 bg-[#486284] rounded-[100px]" />
      </div>
      <div className="flex flex-col text-[#486283] absolute top-[18px] left-[76px]">
        <div className="text-basefont-semibold">{data.memberName}</div>
        <div className="text-xs font-normal">{data.registrationDate}</div>
      </div>
      <div className="absolute top-[18px] left-[270px] w-[90px] px-5 h-[30px] rounded-[30px] border-2 border-[#486283] text-[#486283] text-sm font-semibold flex items-center justify-center">
        {data.jobCategory}
      </div>
      <div className="absolute top-[80px] left-[28px] text-xl font-bold">
        {data.title}
      </div>
      <div className="absolute top-[106px] left-[28px] text-base font-normal w-[323px] h-[70px]">
        {data.title}
      </div>
      <div className="absolute top-[174px] left-[277px] flex gap-x-2 text-[18px]">
        <div className="flex gap-x-[3px]">
          <Like color={'black'} size={24} />
          <div>{data.likeCount}</div>
        </div>
        <div className="flex items-center gap-x-1 font-normal">
          <Icons name={comment} />
          <div>{data.likeCount}</div>
        </div>
      </div>
    </div>
  )
}

export default GroupPost
