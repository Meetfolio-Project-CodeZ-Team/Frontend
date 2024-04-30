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
