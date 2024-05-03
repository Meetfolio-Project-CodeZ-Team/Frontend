import { atom } from 'recoil'

export const selectedPostId = atom<number>({
  key: 'selectedPostId',
  default: 999,
})

export const boardDataState = atom<boardListInfo>({
  key: 'boardDataState',
  default: { list: [], hasNext: false, first: false, last: false },
})