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
