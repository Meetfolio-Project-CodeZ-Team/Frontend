import { atom } from 'recoil'

export const selectedPostId = atom<number>({
  key: 'selectedPostId',
  default: 999,
})
