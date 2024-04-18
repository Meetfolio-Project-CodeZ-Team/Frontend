type SelectedOption = 'dashboard' | 'user' | 'model' | 'points' | 'board'

interface ModelValue {
  modelName: string
  accuracy: number
  loss: number
}

interface ResponseDashBoard {
  aiSolutionInfo: AISolutionTypes
  memberInfo: memberInfo
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
  myPoint: number
  pointList: pointListTypes[]
  listSize: number
  totalPage: number
  totalElements: number
  isFirst: boolean
  isLast: boolean
}
interface pointListTypes {
  createdAt: string
  point: number
  type: string
  totalPoint: number
}
