interface JobBoardInfoTypes {
  boardId: number
  boardType: 'EMPLOYMENT'
  memberName: string
  title: string
  content: string
  likeCount: number
  likeStatus: 'ACTIVE' | 'INACTIVE'
  commentCount: number
  jobCategory: string
  groupCategory: string
  recruitment: string
  peopleNumber: number
  registrationDate: string
}
interface GroupBoardInfoTypes {
  boardId: number
  boardType: 'EMPLOYMENT'
  memberName: string
  title: string
  content: string
  likeCount: number
  likeStatus: 'ACTIVE' | 'INACTIVE'
  commentCount: number
  jobCategory: string
  groupCategory: string
  recruitment: string
  peopleNumber: number
  registrationDate: string
}

interface CommentTypes {
  commentId: number
  content: string
  memberName: string
  profile: string
  sinceCreation: number
}
