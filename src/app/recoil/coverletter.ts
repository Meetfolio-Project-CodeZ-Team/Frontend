import { atom } from 'recoil'

export const covletNum = atom<number>({
  key: 'covletNum',
  default: 0,
})

export const covletData = atom<CoverLetterDataTypes>({
  key: 'covletData',
  default: {
    question: '',
    answer: '',
    jobKeyword: '', // null
    keyword1: '', // null
    keyword2: '', // null
    shareType: '', // null
  },
})
