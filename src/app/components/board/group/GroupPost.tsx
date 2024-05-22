import { EMOJI_VALUE, PROFILE_EMOJI } from '@/app/constants/signup'
import { selectedPostId } from '@/app/recoil/board'
import { comment } from '@/app/ui/IconsPath'
import Like from '@/app/ui/svg/main/Like'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Icons from '../../common/Icons'
import Image from 'next/image'

interface GroupPostProps {
  data: BoardInfoTypes
}

const GroupPost = ({ data }: GroupPostProps) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)
  const [isLiked, setIsliked] = useState(false)
  const [likeCnt, setLikeCnt] = useState(0)

  const like = async (id: number) => {
    const res = await fetch(`/api/board/like?id=${id}`, {
      method: 'POST',
    })
    const resData = await res.json()
    setIsliked(true)
    setLikeCnt(resData.result.likeCount)
  }
  return (
    <div
      className="w-[380px] h-[220px] relative bg-white rounded-[10px] cursor-pointer"
      onClick={() => setSelectedId(data.boardId)}
    >
      <div className="absolute left-7 top-5">
      <div className="w-7 h-7">
          <Image
            width={28}
            height={28}
            src={`/Images/Emoji/${PROFILE_EMOJI[PROFILE_EMOJI.indexOf(data.profile || '')]}.png`}
            alt="logoIcon"
          />
        </div>
      </div>
      <div className="flex flex-col text-[#486283] absolute top-[18px] left-[76px]">
        <div className="text-base font-semibold">{data.memberName}</div>
        <div className="text-xs font-normal">{data.registrationDate}</div>
      </div>
      <div className="absolute top-[18px] left-[270px] w-[90px] px-5 h-[30px] rounded-[30px] border-2 border-[#486283] text-[#486283] text-sm font-semibold flex items-center justify-center">
        {data.groupCategory}
      </div>
      <div className="absolute top-[74px] left-[28px] text-[18px] font-bold">
        {data.title}
      </div>
      <div className="absolute top-[106px] left-[28px] text-base font-normal w-[323px] h-[70px]">
        {data.content.length > 52 ? (
          <>
            {data.content.slice(0, 52)}
            <span>...</span>
          </>
        ) : (
          data.content
        )}
      </div>
      <div className="absolute top-[174px] left-7 pr-12 flex w-full justify-between items-center text-[18px]">
        <div className="text-[15px] font-medium text-[#486283]">
          {data.recruitment}
        </div>
        <div className="flex gap-x-2">
          <div className="flex items-center gap-x-1">
            <div onClick={() => like(data.boardId)}>
              <Like
                color={'black'}
                size={24}
                isLiked={isLiked || data.likeStatus === 'ACTIVE'}
              />
            </div>
            <div>{likeCnt === 0 ? data.likeCount : likeCnt}</div>
          </div>
          <div className="flex items-center gap-x-1 font-normal">
            <Icons name={comment} />
            <div>{data.commentCount}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupPost
