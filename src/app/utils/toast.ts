import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const commonOptions: any = {
  theme: 'light',
  closeOnClick: true,
  autoClose: 1800,
  position: 'top-center',
  style: { fontSize: 16, color: 'black', fontFamily: 'Pretendard' },
}

const authCodeAlert = () => {
  toast.info('5분내에 인증코드를 입력해주세요', {
    icon: () => '🔑',
    ...commonOptions,
  })
}

const pwAlert = () => {
  toast.error('문자,숫자포함 8-20자 비밀번호를 설정해주세요', {
    icon: () => '🔒',
    ...commonOptions,
  })
}

const mismatchAlert = () => {
  toast.warning('올바르지 않은 인증코드입니다.', {
    icon: () => '🚫',
    ...commonOptions,
  })
}

const deleteUserAlert = () => {
  toast.error('해당 회원이 비활성화 되었습니다.', {
    icon: () => '🗑️',
    ...commonOptions,
  })
}

const textLimitAlert = () => {
  toast.warning('텍스트는 255자 이하로 작성해주세요', {
    icon: () => '✏️',
    ...commonOptions,
  })
}

const addTrainData = () => {
  toast.error('학습데이터가 추가되었습니다.', {
    icon: () => '✏️',
    ...commonOptions,
  })
}

const failLogin = () => {
  toast.error('잘못된 이메일 또는 비밀번호입니다.', {
    icon: () => '🔒',
    ...commonOptions,
  })
}

const updateUserInfo = () => {
  toast.success('회원 정보 수정이 완료되었습니다.', {
    icon: () => '✏️',
    ...commonOptions,
  })
}

const successCopy = () => {
  toast.success('클립보드에 복사되었습니다!', {
    icon: () => '✏️',
    ...commonOptions,
  })
}

const deletePostAlert = () => {
  toast.error('해당 게시물이 삭제 되었습니다.', {
    icon: () => '🗑️',
    ...commonOptions,
  })
}

const failVerifyPw = () => {
  toast.error('비밀번호가 일치하지 않습니다.', {
    icon: () => '🔒',
    ...commonOptions,
  })
}

const successVerifyPw = () => {
  toast.error('본인 확인에 성공했습니다!', {
    icon: () => '🔓',
    ...commonOptions,
  })
}

const trainData = () => {
  toast.success('모델의 추가학습이 완료됐습니다.', {
    icon: () => '✅',
    ...commonOptions,
  })
}

const trainStop = () => {
  toast.error('30개 이하로는 학습이 불가합니다.', {
    icon: () => '❌',
    ...commonOptions,
  })
}

const changeVersion = () => {
  toast.success('해당 버전의 모델이 활성화되었습니다.', {
    icon: () => '✅',
    ...commonOptions,
  })
}

const replyAlert = () => {
  toast.success('입력창을 통해 대댓글을 입력해보세요!', {
    icon: () => '🗨️',
    ...commonOptions,
  })
}

const replyBlank = () => {
  toast.warning('질문 혹은 답변을 입력해주세요!', {
    icon: () => '🤔',
    ...commonOptions,
  })
}

const replyKeyword = () => {
  toast.warning('키워드와 직무를 입력해주세요!', {
    icon: () => '🤔',
    ...commonOptions,
  })
}

const replyBoard = () => {
  toast.warning('입력,  체크 요소들을 확인해주세요!', {
    icon: () => '🤔',
    ...commonOptions,
  })
}

export {
  addTrainData,
  authCodeAlert,
  changeVersion,
  deletePostAlert,
  deleteUserAlert,
  failLogin,
  failVerifyPw,
  mismatchAlert,
  pwAlert,
  replyAlert,
  replyBlank,
  replyKeyword,
  successCopy,
  successVerifyPw,
  textLimitAlert,
  trainData,
  trainStop,
  updateUserInfo,
  replyBoard,
}
