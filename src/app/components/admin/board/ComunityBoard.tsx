'use client'
import { COMUNITY_BOARD_H } from '@/app/constants/admin'
import { boardState } from '@/app/recoil/admin'
import { leftAngle, rightAngle } from '@/app/ui/IconsPath'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useRecoilState } from 'recoil'
import Icons from '../../common/Icons'
import ComunityInfo from './ComunityInfo'
interface ComunityBoardProps {
  boardType: string
}

const ComunityBoard = ({ boardType }: ComunityBoardProps) => {
  const [page, setPage] = useState<number>(1)
  const [boardData, setBoardData] = useRecoilState(boardState)

  let filteredBoardList: BoardInfo[] = boardData?.boardInfo || []
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/admin/board?page=${page - 1}`,
      )
      const resData = await response.json()
      setBoardData(resData.result)
    }
    fetchData()
  }, [page])

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1)
  }

  if (boardType !== '') {
    filteredBoardList = boardData.boardInfo.filter(
      (Board) => Board.boardType === boardType,
    )
  }

  return (
    <div className="flex flex-col w-[1034px] h-[760px] mt-[18px]">
      <ToastContainer />
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
        <div className="flex w-full h-[80%] items-center justify-center font-bold text-3xl pb-10">
          ❌ 조건과 부합하는 게시물이 존재하지않습니다.
        </div>
      )}
      <ReactPaginate
        className="flex items-center justify-center mt-8 h-[40px] w-full gap-[20px] text-[17px]  text-[#868686] font-semibold"
        previousLabel={
          <div className="pt-0.5">
            <Icons name={leftAngle} />
          </div>
        }
        nextLabel={
          <div className="pt-0.5">
            <Icons name={rightAngle} />
          </div>
        }
        pageCount={boardData.totalPage}
        onPageChange={handlePageChange}
        activeClassName={'active text-[#486284]'}
      />
    </div>
  )
}

export default ComunityBoard
