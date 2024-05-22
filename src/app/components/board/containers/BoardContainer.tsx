'use client'
import { boardDataState, boardTypeState } from '@/app/recoil/board'
import { leftAngle, rightAngle } from '@/app/ui/IconsPath'
import Pencil from '@/app/ui/svg/common/Pencil'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useRecoilState } from 'recoil'
import Icons from '../../common/Icons'
import BoardHeader from '../BoardHeader'
import GroupBoardContainer from './GroupBoardContainer'
import JobBoardContainer from './JobBoardContainer'

interface BoardContainerProps {
  nickname?: string
  profile?: string
}

const BoardContainer = ({ nickname, profile }: BoardContainerProps) => {
  const [isJob, setIsJob] = useRecoilState(boardTypeState)
  const [page, setPage] = useState<number>(1)
  const path = isJob ? 'employment' : 'group'
  const router = useRouter()
  const [boardData, setBoardData] = useRecoilState(boardDataState)

  const handlePageChange = ({ selected }: { selected: number }) => {
    setPage(() => selected + 1)
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/board/${path}?page=${page - 1}`,
      )
      const resData = await response.json()
      setBoardData(resData.result)
    }
    fetchData()
  }, [page])

  return (
    <div className="flex flex-col w-[920px] pl-[62px] pr-6 pt-6 relative">
      <BoardHeader isJob={isJob} setIsJob={setIsJob} />
      {isJob ? <JobBoardContainer /> : <GroupBoardContainer />}

      <div className="flex w-full items-center justify-center pl-20 pt-6 pr-12 absolute top-[880px] right-6">
        <ReactPaginate
          className="flex items-center justify-center h-[40px] gap-[20px] text-[17px]  text-[#868686] font-semibold cursor-pointer"
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
          pageCount={boardData.boardListInfo.totalPage}
          onPageChange={handlePageChange}
          activeClassName={'active text-[#486284]'}
        />
        <div
          className=" absolute right-12 flex items-center w-[90px] px-1 h-10 ml-[200px] text-white font-semibold bg-[#486283] rounded-[10px] justify-center gap-x-2 cursor-pointer"
          onClick={() =>
            router.push(`/board/post/${path}?nickname=${nickname}`)
          }
        >
          <Pencil />
          글쓰기
        </div>
      </div>
    </div>
  )
}

export default BoardContainer
