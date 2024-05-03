interface BoardInfoTypes {
    boardId: number
    boardType: 'EMPLOYMENT' | 'GROUP'
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
  
  interface boardListInfo {
    list: BoardInfoTypes[]
    hasNext: boolean
    first: boolean
    last: boolean
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