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
