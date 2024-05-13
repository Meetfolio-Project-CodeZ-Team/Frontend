import { atom } from 'recoil'

export const selectedPostId = atom<number>({
  key: 'selectedPostId',
  default: 999,
})

export const boardDataState = atom<boardListInfo>({
  key: 'boardDataState',
  default: {
    boardInfo: [],
    isFirst: false,
    isLast: false,
    totalPage: 0,
    listSize: 0,
    totalElements: 0,
  },
})
