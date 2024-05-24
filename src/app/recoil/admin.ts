import { atom } from 'recoil'

export const modelNum = atom<number>({
  key: 'modelNum',
  default: 0,
})

export const boardState = atom<ResponseBoardData>({
  key: 'boardState',
  default: {
    boardInfo: [],
    listSize: 0,
    totalPage: 0,
    totalElements: 0,
    isFirst: false,
    isLast: false,
  },
})

export const userState = atom<ResponseUser>({
  key: 'userState',
  default: {
    memberList: [],
    listSize: 0,
    totalPage: 0,
    totalElements: 0,
    isFirst: false,
    isLast: false,
  },
})

export const versionState = atom<ResponseModelList>({
  key: 'versionState',
  default: {
    modelInfo: [],
    listSize: 0,
    totalPage: 0,
    totalElements: 0,
    isFirst: false,
    isLast: false,
  },
})
