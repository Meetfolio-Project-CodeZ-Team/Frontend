import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const authCodeAlert = () => {
  toast.info('5분내에 인증코드를 입력해주세요', {
    icon: () => '🔑',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 1500,
    position: 'top-center',
  })
}

export const pwAlert = () => {
  toast.error('문자,숫자포함 8-20자 비밀번호를 설정해주세요', {
    icon: () => '🔒',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 2000,
    position: 'top-center',
  })
}

export const mismatchAlert = () => {
  toast.warning('올바르지 않은 인증코드입니다.', {
    icon: () => '🚫',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 2000,
    position: 'top-center',
  })
}

export const overlapAlert = () => {
  toast.warning('회원은 중복해서 추가할 수 없습니다.', {
    icon: () => '🚫',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 2000,
    position: 'top-center',
  })
}

export const previewAlert = () => {
  toast.info('더블클릭으로 작성으로 돌아가기', {
    icon: () => '🖱️',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 2000,
    position: 'top-center',
  })
}

export const thumbnailAlert = () => {
  toast.warning('썸네일을 입력해주세요', {
    icon: () => '🖼️',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 2000,
    position: 'top-center',
  })
}

export const noContentsAlert = () => {
  toast.info('본문에 최소 1개의 컨텐츠를 추가해주세요', {
    icon: () => '✏️',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 2000,
    position: 'top-center',
  })
}

export const deletePostAlert = () => {
  toast.error('게시물이 삭제되었습니다. 잠시후 메인페이지로 이동합니다.', {
    icon: () => '🗑️',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 2000,
    position: 'top-center',
  })
}

export const textLimitAlert = () => {
  toast.warning('텍스트는 255자 이하로 작성해주세요', {
    icon: () => '✏️',
    theme: 'dark',
    closeOnClick: true,
    autoClose: 2000,
    position: 'top-center',
  })
}
