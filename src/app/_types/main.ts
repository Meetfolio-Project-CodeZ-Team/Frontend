interface CardDataTypes {
  title: string
  startDate: string
  endDate: string
  experienceType: string
  jobKeyword: string
  stack: string
}
interface memberInfo {
  memberName: string
  profile: string
  major: string | null
}
interface ResponseMain {
  memberInfo: memberInfo
  recommendCardInfo: CardDataTypes[]
}
