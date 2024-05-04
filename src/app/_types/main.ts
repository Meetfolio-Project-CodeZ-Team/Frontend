interface CardDataTypes {
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: onlyJobType
  stack: string
  experienceId: number
}
interface memberInfo {
  memberName: string
  profile: string
  major: string | null
  authority?: string
}

interface jobInfo {
  ai: number
  backend: number
  app: number
  design: number
  totalCount: number
  web: number
}

interface ResponseMain {
  memberInfo: memberInfo
  recommendCardInfo: CardDataTypes[]
}
type JobType = '웹개발' | '앱개발' | '디자인' | 'AI' | '백엔드' | '전체'

type onlyJobType = '웹개발' | '앱개발' | '디자인' | 'AI' | '백엔드'
