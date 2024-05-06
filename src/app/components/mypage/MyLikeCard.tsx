import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Like from '@/app/ui/svg/main/Like'
import Comment from '@/app/ui/svg/main/Comment'

interface MyBoardCardProps {
  title?: string
  content?: string
  boardId?: number
  registrationDate?: string
}

interface BoardCardDetail {
  title: string
  content: string
  boardId: number
  groupCategory: string
  recruitment: string
  registrationDate: string
  memberName: string
  peopleNumber: number
  // closeModal: () => void
}

const MyLikeCard = ({
  title,
  content,
  boardId,
  registrationDate,
}: MyBoardCardProps) => {
  const [boardCards, setBoardCards] = useState<BoardCardDetail>()
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  console.log(boardId, '좋아요 한 게시글 정보 id')
  const fetchBoardCards = () => {
    router.push(`/mypage/boardDetail/${boardId}`)
  }

  return (
    <div
      className="w-[1085px] h-[220px] relative mb-[10px] cursor-pointer"
      onClick={fetchBoardCards}
    >
      <div className="w-[1085px] h-[200px] left-0 top-0 absolute">
        <div className="left-[1000px] top-[155px] absolute text-gray-900 text-sm font-normal leading-[30px]">
          {registrationDate}
        </div>
        <div className="w-[1085px] h-[200px] left-0 top-0 absolute border-b border-slate-600" />
        <div className="w-[1080px] h-[39px] left-[25px] top-[15px] absolute  gap-[20px] inline-flex">
          <div className="w-[70px] h-[35px] px-0 py-0 bg-blue-400 rounded-[30px] justify-center items-center flex">
            <div className="w-[60px] text-center text-white text-xl font-semibold leading-[20px]">
              # {boardId}
            </div>
          </div>
          <div className="text-gray-900 text-[24px] font-semibold leading-[35px] ">
            {title}
          </div>
        </div>
      </div>
      <div className="w-[1040px] h-[72px] left-[30px] top-[80px] absolute text-gray-900 text-[15px] font-medium leading-snug">
        {content}
      </div>
    </div>
  )
}
export default MyLikeCard
