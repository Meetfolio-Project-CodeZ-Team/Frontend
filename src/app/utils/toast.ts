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
  toast.success('올바르지 않은 id 혹은 pw입니다.', {
    icon: () => '🔒',
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
}
