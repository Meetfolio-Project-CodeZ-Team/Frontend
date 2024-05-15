import { COMUNITY_BOARD_H } from '@/app/constants/admin'
import ComunityInfo from './ComunityInfo'

interface ComunityBoardProps {
  boardList: ResponseBoardData[]
  boardType: string
}

const ComunityBoard = ({ boardList, boardType }: ComunityBoardProps) => {
  let filteredBoardList: ResponseBoardData[] = boardList

  if (boardType !== '') {
    filteredBoardList = boardList.filter(
      (Board) => Board.boardType === boardType,
    )
  }

  return (
    <div className="flex flex-col w-[1034px] h-[720px] mt-[18px]">
      <div className="flex w-[1034px] h-[50px] pl-[38px] border-y border-[#616161] items-center text-black text-lg">
        <div className="font-bold">{COMUNITY_BOARD_H[0]}</div>
        <div className="ml-[112px] ">{COMUNITY_BOARD_H[1]}</div>
        <div className="ml-[163px]">{COMUNITY_BOARD_H[2]}</div>
        <div className="ml-[178px]">{COMUNITY_BOARD_H[3]}</div>
        <div className="ml-[198px]">{COMUNITY_BOARD_H[4]}</div>
      </div>
      {filteredBoardList.length !== 0 ? (
        filteredBoardList.map((Board, i) => (
          <ComunityInfo
            key={i}
            createdAt={Board.createdAt}
            memberName={Board.memberName}
            title={Board.title}
            boardId={Board.boardId}
            type={Board.boardType}
          />
        ))
      ) : (
        <div className="flex w-full h-full items-center justify-center font-bold text-3xl pb-10">
          ❌ 조건과 부합하는 게시물이 존재하지않습니다.
        </div>
      )}
    </div>
  )
}

export default ComunityBoard
