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
  toast.error('해당 회원이 탈퇴 되었습니다.', {
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

const deletePostAlert = () => {
  toast.error('해당 게시물이 삭제 되었습니다.', {
    icon: () => '🗑️',
    ...commonOptions,
  })
}

export {
  authCodeAlert,
  pwAlert,
  mismatchAlert,
  deleteUserAlert,
  textLimitAlert,
  addTrainData,
  failLogin,
  updateUserInfo,
  deletePostAlert,
}
