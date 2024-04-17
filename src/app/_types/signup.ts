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

type GradeEnum = {
  '1학년': string
  '2학년': string
  '3학년': string
  '4학년': string
  졸업생: string
}
