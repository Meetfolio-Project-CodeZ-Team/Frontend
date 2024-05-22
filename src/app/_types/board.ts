interface BoardInfoTypes {
  boardId: number
  boardType: 'EMPLOYMENT' | 'GROUP'
  memberName: string
  title: string
  content: string
  profile:string
  likeCount: number
  likeStatus: 'ACTIVE' | 'INACTIVE'
  commentCount: number
  jobCategory: onlyJobType
  groupCategory: GroupBoardTypes
  recruitment: RecruitType
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

interface boardListInfo {
  boardInfo: BoardInfoTypes[]
  isFirst: boolean
  isLast: boolean
  totalPage: number
  listSize: number
  totalElements: number
}
interface ResponseEmploymentAll {
  memberInfo: memberInfo
  boardListInfo: boardListInfo
}

type GroupBoardTypes = '스터디' | '공모전'

interface PostEmployment {
  title: string
  content: string
  jobKeyword: onlyJobType
}

type RecruitType = '웹' | '모바일' | '디자인' | 'AI' | '백엔드' | 'PM'

interface GroupEmployment {
  title: string
  content: string
  groupCategory: string
  recruitment: string
  peopleNumber: number
}

interface PatchBody {
  title: string
  content: string
  groupCategory: GroupBoardTypes
  recruitment: RecruitType
  peopleNumber: string
  jobKeyword: string
}

interface CommentDataTypes {
  commentId: number
  content: string
  memberName: string
  profile: string
  sinceCreation: number
  childComments: CommentDataTypes[]
}
