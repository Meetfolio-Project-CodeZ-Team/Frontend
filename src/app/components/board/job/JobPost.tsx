import { PROFILE_EMOJI } from '@/app/constants/signup'
import { selectedPostId } from '@/app/recoil/board'
import { comment } from '@/app/ui/IconsPath'
import Like from '@/app/ui/svg/main/Like'
import Image from 'next/image'
import { useState } from 'react'
import { useRecoilState } from 'recoil'
import Icons from '../../common/Icons'

interface JobPostProps {
  data: BoardInfoTypes
}

const JobPost = ({ data }: JobPostProps) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)
  const [isLiked, setIsliked] = useState(false)
  const [likeCnt, setLikeCnt] = useState(0)

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
        {data.jobCategory}
      </div>
      <div className="absolute top-[74px] left-[28px] text-[18px] font-bold">
        {data.title.length > 23 ? (
          <>{data.title.slice(0, 23)}...</>
        ) : (
          data.title
        )}
      </div>
      <div className="absolute top-[106px] left-[28px] text-base font-normal w-[323px] h-[70px]">
        {data.content.length > 60 ? (
          <>{data.content.slice(0, 60)}...</>
        ) : (
          data.content
        )}
      </div>
      <div className="absolute top-[174px] right-[26px] flex gap-x-2 text-base font-semibold">
        <div className="flex items-center gap-x-1">
          <div>
            <Like
              color={'black'}
              size={24}
              isLiked={isLiked || data.likeStatus === 'ACTIVE'}
            />
          </div>
          <div>{likeCnt === 0 ? data.likeCount : likeCnt}</div>
        </div>
        <div className="flex items-center gap-x-1">
          <div>
            <Icons name={comment} />
          </div>
          <div>{data.commentCount}</div>
        </div>
      </div>
    </div>
  )
}

export default JobPost
