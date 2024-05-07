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
  coverLetterPoint: number
  totalPoint: number
  yearMonth: string
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
  status: string
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
  email: string
}

interface PaymentInfoTypes {
  paymentList: PaymentListTypes[]
  listSize: number
  totalPage: number
  totalElements: number
  isFirst: boolean
  isLast: boolean
}

interface ResponsePayment {
  totalSales: number
  paymentInfo: PaymentInfoTypes
}

interface ResponseModelData {
  modelEvaluation: EvaluationTypes[]
  aiserviceInfo: aiServiceInfoTypes
}
interface EvaluationTypes {
  modelName: string
  accuracy: number
  loss: number
}
interface aiServiceInfoTypes {
  feedbackCount: number
  analysisCount: number
  totalCount: number
  satisfaction: number
}

interface ResponseTrainData {
  datasetInfo: datasetInfoTypes[]
  listSize: number
  totalPage: number
  totalElements: number
  isFirst: boolean
  isLast: boolean
}
interface datasetInfoTypes {
  createdAt: string
  job: string
  domain: string
  url: string
}

type BoardTypes = '그룹원 모집' | '취업 정보'

interface ResponseBoardData {
  boardId: number
  createdAt: string
  boardType: 'EMPLOYMENT' | 'GROUP'
  memberName: string
  title: string
}
