import { selectedPostId } from '@/app/recoil/board'
import { comment } from '@/app/ui/IconsPath'
import Like from '@/app/ui/svg/main/Like'
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

  console.log(selectedId, '번 게시물 선택 됨')

  const like = async (id: number) => {
    const res = await fetch(`/api/board/like?id=${id}`, {
      method: 'POST',
    })
    const resData = await res.json()
    setIsliked(true)
    setLikeCnt(resData.result.likeCount)

    console.log(resData, '조아요 응답')
  }

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
      <div className="absolute top-[74px] left-[28px] text-xl font-bold">
        {data.title}
      </div>
      <div className="absolute top-[106px] left-[28px] text-base font-normal w-[323px] h-[70px]">
        {data.content.length > 60 ? (
          <>
            {data.content.slice(0, 60)}
            <span>...</span>
          </>
        ) : (
          data.content
        )}
      </div>
      <div className="absolute top-[174px] right-[26px] flex gap-x-2 text-base font-semibold">
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
