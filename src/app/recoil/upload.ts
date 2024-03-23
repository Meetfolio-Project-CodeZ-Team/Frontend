import { atom } from 'recoil'

export const orderState = atom<number>({
  key: 'orderState',
  default: 0,
})

export const userId = atom<number[]>({
  key: 'userIdFormState',
  default: [],
})

export const uploadForm = atom<FormData>({
  key: 'uploadFormState',
  default: new FormData(),
})

// export const uploadDataState = atom<UploadPFTypes>({
//   key: 'uploadDataState',
//   default: {
//     articleType: 'PORTFOLIO',
//     title: '',
//     content: [],
//     skills: [],
//     tags: [],
//     teamMembersId: [],
//     sharedText: '',
//     thumbnail: '',
//   },
// });

export const crewRecruiterState = atom<null>({
  key: 'crewRecruiterState',
  default: null,
})

export const fileSizeState = atom<number>({
  key: 'fileSizeState',
  default: 0,
})
