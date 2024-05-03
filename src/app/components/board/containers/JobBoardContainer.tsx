import JobPost from '../job/JobPost'

interface JobBoardContainerProps {
  boardData: boardListInfo
}

const JobBoardContainer = ({ boardData }: JobBoardContainerProps) => {
  return (
    <div className="flex w-[783px] flex-wrap gap-x-[23px] gap-y-[30px]">
      {boardData.list.map((post) => (
        <JobPost data={post} />
      ))}
    </div>
  )
}

export default JobBoardContainer
