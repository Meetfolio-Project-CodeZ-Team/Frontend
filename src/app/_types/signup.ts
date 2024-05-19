interface authContent {
  email: string
  authCode: string
}

interface signupTypes {
  email: string
  password: string
  major: string
  grade: string
  jobKeyword: string
}

type GradeEnum = '1학년' | '2학년' | '3학년' | '4학년' | '졸업생'

interface loginContent {
  email: string
  password: string
}

type collegeType =
  | '가천리버럴아츠칼리지'
  | '경영대학'
  | '사회과학대학'
  | '인문대학'
  | '법과대학'
  | '공과대학'
  | '바이오나노대학'
  | 'IT융합대학'
  | '예술체육대학'
  | '반도체대학'

type profileImage =
  | 'BACKEND'
  | 'WEB'
  | 'APP'
  | 'DESIGN'
  | 'AI'
  | 'TOOL'
  | 'MAN'
  | 'WOMAN'
  | 'MOUSE'
  | 'KEYBOARD'
  | 'FIRE'
  | 'SPARKLE'
