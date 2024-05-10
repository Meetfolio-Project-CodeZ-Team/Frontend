import { COMUNITY_BOARD_H } from '@/app/constants/admin'
import ComunityInfo from './ComunityInfo'

interface ComunityBoardProps {
  boardList: ResponseBoardData[]
}

const ComunityBoard = ({ boardList }: ComunityBoardProps) => {
  return (
    <div className="flex flex-col w-[1034px] h-[720px] mt-[22px]">
      <div className="flex w-[1034px] h-[50px] pl-[38px] border-y border-[#616161] items-center text-black text-lg">
        <div className="font-bold">{COMUNITY_BOARD_H[0]}</div>
        <div className="ml-[112px] ">{COMUNITY_BOARD_H[1]}</div>
        <div className="ml-[163px]">{COMUNITY_BOARD_H[2]}</div>
        <div className="ml-[178px]">{COMUNITY_BOARD_H[3]}</div>
        <div className="ml-[198px]">{COMUNITY_BOARD_H[4]}</div>
      </div>
      {boardList.map((Board, i) => (
        <ComunityInfo
          createdAt={Board.createdAt}
          memberName={Board.memberName}
          title={Board.title}
          boardId={Board.boardId}
          type={Board.boardType}
        />
      ))}
    </div>
  )
}

export default ComunityBoard
