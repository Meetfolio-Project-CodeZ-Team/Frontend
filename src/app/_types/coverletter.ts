interface CoverLetterDataTypes {
  question: string
  answer: string
  jobKeyword: string // null
  keyword1: string // null
  keyword2: string // null
  shareType: string // null
}

interface CovletCard {
  index: number
  question: string
  answer: string
  coverLetterId: number
  createdAt: string
}

interface FeedbackInfo {
  correction?: string
  recommendQuestion1?: string
  recommendQuestion2?: string
  recommendQuestion3?: string
}

interface SatisfactionData {
  satisfaction?: number
}
