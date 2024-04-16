import { atom } from 'recoil'

export const covletNum = atom<number>({
  key: 'covletNum',
  default: 0,
})

export const covletData = atom<CoverLetterDataTypes>({
  key: 'Data',
  default: {
    question: '',
    answer: '',
    job: '', // null
    keyword1: '', // null
    keyword2: '', // null
    // "shareType":  PUBLIC // null
  },
})
