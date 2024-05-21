type SelectedUserOption = 'portfolio' | 'board' | 'points' | 'user'

interface ModelValue {
  modelName: string
  accuracy: number
  loss: number
}

interface UserInfoTypes {
  memberId?: number // 선택적 필드로 추가
  email: string
  major: string
  grade: string
  status: string
  registrationDate: string
  jobKeyword?: string
  point?: number
  password?: string
}

interface pageInfo {
  isFirst: boolean
  isLast: boolean
  totalPage: number
  listSize: number
  totalElements: number
}
