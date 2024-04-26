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
  keyword1?: string | null
  keyword2?: string | null
  jobKeyword?: string | null
}

export const covletData = atom<CoverLetterDataTypes>({
  key: 'covletData',
  default: {
    question: '',
    answer: '',
    shareType: '', // null
    jobKeyword: null,
    keyword1: null,
    keyword2: null,
  },
})
