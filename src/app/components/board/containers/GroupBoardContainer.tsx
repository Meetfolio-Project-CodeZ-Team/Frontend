import GroupPost from '../GroupPost'

const mookBoard: GroupBoardInfoTypes = {
  boardId: 0,
  boardType: 'EMPLOYMENT',
  memberName: 'yng1404',
  title: 'string',
  content: 'string',
  likeCount: 0,
  likeStatus: 'ACTIVE',
  commentCount: 0,
  jobCategory: '백엔드',
  groupCategory: 'string',
  recruitment: 'string',
  peopleNumber: 0,
  registrationDate: '2024-05-01',
}

const GroupBoardContainer = () => {
  return (
    <div className="flex w-[783px] flex-wrap gap-x-[23px] gap-y-[30px]">
      <GroupPost data={mookBoard} />
      <GroupPost data={mookBoard} />
      <GroupPost data={mookBoard} />
      <GroupPost data={mookBoard} />
      <GroupPost data={mookBoard} />
      <GroupPost data={mookBoard} />
    </div>
  )
}

export default GroupBoardContainer
