import { atom } from 'recoil'

export const emailState = atom<string>({
  key: 'email',
  default: '',
})
