export const SIGNUP = {
  Description: '재학생 인증을 위해 가천대 이메일 아이디를 입력해주세요.',
  Email: '@gachon.ac.kr',
  Auth: '재학생 인증하기',
  OnBoard: '회원이 되어 다양한 서비스를 경험해보세요!',
  Password: '비밀번호 입력  ( 문자, 숫자 포함 8 ~ 20자 )',
} as const

export const JOBKEYWORD = [
  '백엔드',
  '웹개발',
  '앱개발',
  '디자인',
  'AI',
] as const

export const COMPLETE = [
  '모든 회원가입 절차가 완료되었습니다.',
  '로그인 후 ',
  'Meetfolio',
  '의 다양한 서비스를 이용해보세요!',
  '*회원 가입 내역 확인 및 수정은 마이페이지 - 개인정보 수정에서 가능합니다.',
]

export const GRADE = ['1학년', '2학년', '3학년', '4학년', '졸업생']

export const JOBKEYWORD_USER:JobType[] = [...JOBKEYWORD, '전체']
export const Board = ['그룹원 모집', '취업정보']

export const GRADE_ENUM: GradeEnum = {
  '1학년': 'FRESHMAN',
  '2학년': 'SOPHOMORE',
  '3학년': 'JUNIOR',
  '4학년': 'SENIOR',
  졸업생: 'GRADUATE',
}

export const JOB_ENUM = {
  백엔드: 'BACKEND',
  '웹개발': 'WEB',
  '앱개발': 'APP',
  디자인: 'DESIGN',
  AI: 'AI',
  전체:''
}
