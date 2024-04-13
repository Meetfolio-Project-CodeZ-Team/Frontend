import { atom } from 'recoil'

export const expNum = atom<number>({
  key: 'expNum',
  default: 0,
})

export const expData = atom<ExperiencDataTypes>({
  key: 'expData',
  default: {
    title: '',
    startDate: '',
    endDate: '',
    experienceType: '',
    task: '',
    motivation: '',
    jobKeyword: '',
    stack: '',
    detail: '',
    advance: '',
  },
})
