import { PROFILE_EMOJI } from '@/app/constants/signup'
import { selectedPostId } from '@/app/recoil/board'
import Comment from '@/app/ui/svg/main/Comment'
import Like from '@/app/ui/svg/main/Like'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

interface MyBoardCardProps {
  title?: string
  content?: string
  boardId?: number
  groupCategory?: string
  recruitment?: string
  registrationDate?: string
  memberName?: string
  likeCount?: number
  commentCount?: number
  boardType?: string
  jobCategory?: string
  likeStatus: string
  profile?: string
}

const MyBoardCard = ({
  title,
  content,
  boardId,
  groupCategory,
  recruitment,
  registrationDate,
  memberName,
  likeCount,
  commentCount,
  boardType,
  jobCategory,
  likeStatus,
  profile,
}: MyBoardCardProps) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)
  const [isLiked, setIsliked] = useState(false)
  const router = useRouter()
  const fetchBoardCards = () => {
    setSelectedId(boardId || 999)

    router.push(`/mypage/boardDetail/${boardId}`)
  }

  return (
    <div
      className="w-[1085px] h-60 relative mt-[20px] cursor-pointer"
      onClick={fetchBoardCards}
    >
      <div className="w-[1085px] h-60 left-0 top-0 absolute bg-slate-200 rounded-[10px]" />
      <div className="w-[72px] h-[30px] px-3 left-[990px] top-[24px] absolute rounded-[30px] border border-slate-600 justify-center items-center  inline-flex">
        <div className="w-[100px] h-6 text-center text-slate-600 text-sm font-semibold leading-[22px]">
          {boardType === 'EMPLOYMENT' ? jobCategory : groupCategory}
        </div>
      </div>
      <div className="w-[47.21px] h-[50px] left-[28.33px] top-[30px] absolute rounded-full" />
      <div className="w-[800px] h-[18px] left-[28.33px] top-[78px] absolute text-gray-900 text-[22px] font-bold leading-[30px]">
        {title}
      </div>
      <div className="w-[152.96px] h-[41px] left-[28.33px] top-[18px] absolute">
        <div className="w-[105.75px] h-[18px] left-[52px] top-[5px] absolute text-slate-600 text-[15px] font-semibold leading-[30px]">
          {memberName}
        </div>
        <div className="w-[105.75px] h-[18px] left-[52px] top-[24px] absolute text-slate-600 text-xs font-normal leading-[30px]">
          {registrationDate}
        </div>
        <div className="w-6 h-6 top-[13px] left-[8px] absolute">
          <Image
            width={24}
            height={24}
            src={`/Images/Emoji/${PROFILE_EMOJI[PROFILE_EMOJI.indexOf(profile || '')]}.png`}
            alt="logoIcon"
          />
        </div>
      </div>
      <div className="w-[1035px] h-[73px] left-[29px] top-[113px] absolute text-gray-900 text-[15px] font-medium leading-snug ">
        {content !== undefined && content.length < 360
          ? content
          : content?.substring(0, 360) + '...'}
        <br />
        <br />{' '}
      </div>
      <div className="w-[1040px] h-[37px] left-[29px] top-[200px] justify-center items-center gap-[680px] inline-flex absolute">
        <div className="w-[250px] h-[37px] text-slate-600 text-[15px] font-medium  leading-snug">
          {recruitment}
        </div>
        <div className="h-[37px] justify-start items-center gap-[18px] flex">
          <div className="h-[37px] justify-between items-center flex">
            <div className="w-4 h-4 relative mr-3 mb-[22px] ">
              <Like
                color={'black'}
                size={24}
                isLiked={isLiked || likeStatus === 'ACTIVE'}
              />
            </div>
            <div className="w-[20px]  text-gray-900 text-lg font-normal mb-3  leading-[30px]">
              {likeCount}
            </div>
          </div>
          <div className="h-[37px] justify-start items-center  flex">
            <div className="w-4 h-4 relative mr-3 mb-[18px] ">
              <Comment color={'black'} size={24} />
            </div>
            <div className="w-5 text-gray-900 text-lg font-normal mb-3 mr-3 leading-[30px]">
              {commentCount}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyBoardCard
