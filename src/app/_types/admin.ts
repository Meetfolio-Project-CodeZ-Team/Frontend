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
  datasetInfo: trainDataTypes
  modelResult: modelResultTypes
  trainableNumber: number
}
interface datasetInfoTypes {
  createdAt: string
  job: onlyJobType
  domain: string
  url: string
}

interface trainDataTypes {
  datasetInfo: datasetInfoTypes[]
  listSize: number
  totalPage: number
  totalElements: number
  isFirst: boolean
  isLast: boolean
}

interface modelResultTypes {
  modelId: number
  version: number
  modelName: string
  fileName: string
  filePath: string
  status: 'ACTIVE' | 'INACTIVE'
  createdDate: string
  activatedDate: string
  accuracy: number
}

type BoardTypes = '그룹원 모집' | '취업 정보'

interface ResponseBoardData {
  boardId: number
  createdAt: string
  boardType: 'EMPLOYMENT' | 'GROUP'
  memberName: string
  title: string
}

interface AdditionalTrainTypes {
  model_id: number
  created_at: string
}

interface ModelData {
  modelId: number
  version: number
  modelName: string
  status: 'ACTIVE' | 'INACTIVE'
  learnedDate: string
  accuracy: number
}

interface ResponseModelList {
  modelInfo: ModelData[]
  listSize: number
  totalPage: number
  totalElements: number
  isFirst: boolean
  isLast: boolean
}
