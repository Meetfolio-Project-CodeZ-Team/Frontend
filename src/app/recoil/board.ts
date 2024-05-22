import { atom } from 'recoil'

export const selectedPostId = atom<number>({
  key: 'selectedPostId',
  default: 999,
})

export const boardDataState = atom<ResponseEmploymentAll>({
  key: 'boardDataState',
  default: {
    memberInfo: { memberName: '', profile: '', major: null, authority: '' },
    boardListInfo: {
      boardInfo: [
        {
          boardId: 0,
          boardType: 'EMPLOYMENT',
          memberName: 'string',
          title: 'string',
          content: 'string',
          likeCount: 0,
          likeStatus: 'ACTIVE',
          commentCount: 0,
          jobCategory: '웹개발',
          groupCategory: '스터디',
          recruitment: '웹',
          peopleNumber: 0,
          registrationDate: 'string',
          profile:'BACKEND'
        },
      ],
      isFirst: false,
      isLast: false,
      totalPage: 0,
      listSize: 0,
      totalElements: 0,
    },
  },
})
