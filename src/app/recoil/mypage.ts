import { atom } from 'recoil'

export interface UserInfoTypes {
  memberId?: number // 선택적 필드로 추가
  email: string
  major: string
  grade: string
  status: string
  registrationDate: string
  jobKeyword?: string
  point?: number
  password?: string
}

export const userData = atom<UserInfoTypes>({
  key: 'userData',
  default: {
    email: '',
    major: '',
    grade: '',
    status: '',
    registrationDate: '',
    jobKeyword: '',
  },
})

export const portNum = atom<number>({
  key: 'portNum',
  default: 0,
})

export const boardNum = atom<number>({
  key: 'boardNum',
  default: 0,
})

export const pointNum = atom<number>({
  key: 'pointNum',
  default: 0,
})
