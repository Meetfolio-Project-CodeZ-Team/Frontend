import { atom } from 'recoil'

export const emailState = atom<string>({
  key: 'email',
  default: '',
})

export const userState = atom<memberInfo>({
  key: 'userState',
  default: { memberName: '', profile: '', major: '' },
})
