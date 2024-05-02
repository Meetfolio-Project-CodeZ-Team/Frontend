import GroupPost from '../group/GroupPost'

interface JobBoardContainerProps {
  boardData: boardListInfo
}

const JobBoardContainer = ({ boardData }: JobBoardContainerProps) => {
  return (
    <div className="flex w-[783px] flex-wrap gap-x-[23px] gap-y-[30px]">
      {boardData.list.map((post) => (
        <GroupPost data={post} />
      ))}
    </div>
  )
}

export default JobBoardContainer
