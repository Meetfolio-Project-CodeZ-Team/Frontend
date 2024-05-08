import { atom } from 'recoil'

export const modelNum = atom<number>({
  key: 'modelNum',
  default: 0,
})