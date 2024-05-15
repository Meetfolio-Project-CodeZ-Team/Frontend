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
  },
})

export const tidState = atom<string>({
  key: 'tidState',
  default: '',
})

export interface FeedbackData {
  feedback: string;
  recommend: string[];
}

export const feedbackDataState = atom<FeedbackData>({
  key: 'feedbackDataState',
  default: {
    feedback:'',
    recommend: [],
  },
});

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