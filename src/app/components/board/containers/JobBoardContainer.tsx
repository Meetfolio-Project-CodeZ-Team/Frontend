import JobPost from '../job/JobPost'

interface JobBoardContainerProps {
  boardData: boardListInfo
}

const JobBoardContainer = ({ boardData }: JobBoardContainerProps) => {
  return (
    <div>
      {boardData.boardInfo.length > 0 ? (
        <div className="flex w-[783px] flex-wrap gap-x-[23px] gap-y-[30px]">
          {boardData.boardInfo.map((post, i) => (
            <JobPost data={post} key={i} />
          ))}
        </div>
      ) : (
        <div className="text-2xl font-bold pt-[200px] w-full h-full flex items-center justify-center text-slate-700 gap-x-2">
          <div className="text-3xl mb-1">😵 </div>
          <div>해당 검색어와 관련된 게시물이 존재하지 않습니다</div>
        </div>
      )}
    </div>
  )
}

export default JobBoardContainer
