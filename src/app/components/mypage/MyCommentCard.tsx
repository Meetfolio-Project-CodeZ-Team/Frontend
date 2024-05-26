import { selectedPostId } from '@/app/recoil/board'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useRecoilState } from 'recoil'

interface MyBoardCardProps {
  commentId?: number
  content: string
  boardId?: number
  boardTitle: string
  boardCreatedAt: string
}

const MyCommentCard = ({
  commentId,
  content,
  boardId,
  boardTitle,
  boardCreatedAt,
}: MyBoardCardProps) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedPostId)
  const router = useRouter()
  const fetchBoardCards = () => {
    setSelectedId(boardId || 999)

    router.push(`/mypage/boardDetail/${boardId}`)
  }

  return (
    <div
      className="w-[1085px] h-[119px] flex-col justify-start items-start gap-[30px] inline-flex mb-[33px] cursor-pointer"
      onClick={fetchBoardCards}
    >
      <div className="w-[1085px] h-[119px] relative border-2 border-gray-500 rounded-[10px]">
        <div className="w-6 h-[19.76px] left-[918px] top-[16.47px] absolute rounded-[10px]" />
        <div className="w-[252px] h-[25.53px] left-[34px] top-[61.41px] absolute">
          <div className="w-[1000px] h-[25.53px] left-[0px] top-0 absolute text-black text-xl font-medium leading-[30px] inline-flex gap-[20px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97-1.94.284-3.916.455-5.922.505a.39.39 0 0 0-.266.112L8.78 21.53A.75.75 0 0 1 7.5 21v-3.955a48.842 48.842 0 0 1-2.652-.316c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                clip-rule="evenodd"
              />
            </svg>
            {content}
          </div>
        </div>
        <div className="w-[300px] h-[18px] left-[34px] top-[20px] absolute text-zinc-600 text-lg font-bold leading-[30px]">
          {boardTitle}
        </div>
        <div className="left-[970px] top-[67px] absolute text-slate-600 text-sm font-normal leading-[30px]">
          {boardCreatedAt}
        </div>
      </div>
    </div>
  )
}
export default MyCommentCard
