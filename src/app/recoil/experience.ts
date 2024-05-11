import { atom } from 'recoil'

export const expNum = atom<number>({
  key: 'expNum',
  default: 0,
})

export const modalNum = atom<number>({
  key: 'modalNum',
  default: 0,
})

export interface ExperienceDataTypes {
  experienceId?: number // 선택적 필드로 추가
  title: string
  startDate: string
  endDate: string
  experienceType: string
  task: string
  motivation: string
  jobKeyword: string
  stack: string
  detail: string
  advance: string
  expStacks: string[]
}

export const expData = atom<ExperienceDataTypes>({
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
    expStacks: [],
  },
})
