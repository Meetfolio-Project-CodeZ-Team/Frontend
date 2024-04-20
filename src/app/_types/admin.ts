type SelectedOption = 'dashboard' | 'user' | 'model' | 'points' | 'board'

interface ModelValue {
  modelName: string
  accuracy: number
  loss: number
}

interface ResponseDashBoard {
  aiServiceInfo: AISolutionTypes
  membersInfo: jobInfo
  pointInfo: pointInfoTypes
  paymentInfo: number
}

interface AISolutionTypes {
  feedbackCount: number
  analysisCount: number
  totalCount: number
  satisfaction: number
}

interface pointInfoTypes {
  analysisPoint: number
  solutionPoint: number
  totalPoint: number
}
interface pointListTypes {
  createdAt: string
  point: number
  type: string
  totalPoint: number
}
interface memberInfoTypes {
  memberId: number
  registrationDate: string
  email: string
  grade: string
  major: string
  jobKeyword: string
  point: number
}
interface ResponseUser {
  memberList: memberInfoTypes[]
  listSize: number
  totalPage: number
  totalElements: number
  isFirst: boolean
  isLast: boolean
}

interface ResponsePoint {
  yearMonth: string
  coverLetterPoint: number
  analysisPoint: number
  totalPoint: number
}

interface MemberInfoPoint {
  authority: string
  memberName: string
  profile: string
  major: string
}
interface PaymentListTypes {
  createdAt: string
  payment: number
  point: number
  totalPoint: number
}

interface PaymentInfoTypes {
  myPoint: number
  paymentList: PaymentListTypes[]
  listSize: number
  totalPage: number
  totalElements: number
  isFirst: boolean
  isLast: boolean
}

interface ResponsePayment {
  memberInfo: MemberInfoPoint
  paymentInfo: PaymentInfoTypes
}
