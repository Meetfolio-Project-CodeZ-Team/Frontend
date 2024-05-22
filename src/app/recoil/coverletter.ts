import { atom } from 'recoil'

export const covletNum = atom<number>({
  key: 'covletNum',
  default: 0,
})

export interface CoverLetterDataTypes {
  coverLetterId?: number // 선택적 필드로 추가
  question: string
  answer: string
  shareType: string
  keyword1?: string
  keyword2?: string
  jobKeyword?: string
  isPaid?:false
}

export const covletData = atom<CoverLetterDataTypes>({
  key: 'covletData',
  default: {
    question: '',
    answer: '',
    shareType: 'PRIVATE',
    keyword1: '',
    keyword2: '',
    jobKeyword: '',
    isPaid:false,
  },
})

export const tidState = atom<string>({
  key: 'tidState',
  default: '',
})

export interface FeedbackData {
  feedback_id: number
  feedback: string
  recommend: string[]
}

export const feedbackDataState = atom<FeedbackData>({
  key: 'feedbackDataState',
  default: {
    feedback: '',
    recommend: [],
    feedback_id: 0
  },
})

export interface FeedbackInfo {
  
  correction?: string
  recommendQuestion1?: string
  recommendQuestion2?: string
  recommendQuestion3?: string
}

export const feedbackData = atom<FeedbackInfo>({
  key: 'feedbackData',
  default: {
    correction: '',
    recommendQuestion1: '',
    recommendQuestion2: '',
    recommendQuestion3: '',
    
  },
})

export interface SatisfactionData {
  satisfaction?: number
}

export const satisfactionData = atom<SatisfactionData>({
  key: 'satisfactionData',
  default: {
    satisfaction:0
  }
})

export interface AnalysisInfo {
  
  jobSuitability?: number
  keyword1?: string
  keyword2?: string
  keyword3?: string
}

export const analysisData = atom<AnalysisInfo>({
  key: 'analysisData',
  default: {
    jobSuitability: 0,
    keyword1: '',
    keyword2: '',
    keyword3: '',
    
  },
})