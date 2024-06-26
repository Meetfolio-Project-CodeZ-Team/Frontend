export const SIGNUP = {
  Description: '재학생 인증을 위해 가천대 이메일 아이디를 입력해주세요.',
  Email: '@gachon.ac.kr',
  Auth: '재학생 인증하기',
  OnBoard: '회원이 되어 다양한 서비스를 경험해보세요!',
  Password: '특수문자, 문자, 숫자 포함 8 ~ 20자',
} as const

export const JOBKEYWORD: onlyJobType[] = [
  '백엔드',
  '웹개발',
  '앱개발',
  '디자인',
  'AI',
] as const

export const COMPLETE = [
  '모든 회원가입 절차가 완료되었어요.',
  '로그인 후 ',
  'Meetfolio',
  '의 다양한 서비스를 이용해보세요!',
  '*회원 가입 내역 확인 및 수정은 마이페이지 - 개인정보 수정에서 가능해요.',
]

export const GRADE: GradeEnum[] = ['1학년', '2학년', '3학년', '4학년', '졸업생']

export const JOBKEYWORD_USER: JobType[] = [...JOBKEYWORD, '전체']

export const Board: BoardTypes[] = ['그룹원 모집', '취업 정보', '전체']

export const GRADE_ENUM = {
  '1학년': 'FRESHMAN',
  '2학년': 'SOPHOMORE',
  '3학년': 'JUNIOR',
  '4학년': 'SENIOR',
  졸업생: 'GRADUATE',
}

export const JOB_ENUM = {
  백엔드: 'BACKEND',
  웹개발: 'WEB',
  앱개발: 'APP',
  디자인: 'DESIGN',
  AI: 'AI',
  전체: '',
}

export const COLLEGE: collegeType[] = [
  '가천리버럴아츠칼리지',
  '경영대학',
  '사회과학대학',
  '인문대학',
  '법과대학',
  '공과대학',
  '바이오나노대학',
  'IT융합대학',
  '예술체육대학',
  '반도체대학',
]

export const CLASS_ENUM = {
  가천리버럴아츠칼리지: ['자유전공', '한국학 전공'],
  경영대학: ['경영학부', '금융수학과'],
  사회과학대학: [
    '사회복지학과',
    '미디어 커뮤니케이션 학과',
    '유아교육학과',
    '심리학과',
    '관광경영학과',
    '경제학과',
    '의료산업경영학과',
    '응용통계학과',
  ],
  인문대학: ['한국어문학과', '영미어문학과', '동양어문학과', '유럽어문학과'],
  법과대학: ['법학과', '경찰행정학과', '행정학과', '경찰학연계전공'],
  공과대학: [
    '도시계획학전공',
    '조경학전공',
    '실내건축학전공',
    '건축학전공',
    '건축공학전공',
    '설비·소방공학과',
    '화공생명공학과',
    '기계공학과',
    '토목환경공학과',
    '산업경영공학과',
    '신소재공학과',
    '스마트팩토리전공',
    '미래자동차학과',
  ],
  바이오나노대학: [
    '바이오나노학과',
    '화학과',
    '물리학과',
    '생명과학과',
    '식품생물공학과',
    '식품영양학과',
  ],
  IT융합대학: [
    'AI·소프트웨어학부',
    '컴퓨터공학전공',
    '전기공학과',
    '에너지IT학과',
    '의공학과',
    '스마트시티학과',
    '스마트보안전공',
    '클라우드공학과',
    '게임·영상학과',
    '바이오의료기기학과',
  ],
  예술체육대학: [
    '회화·조소전공',
    '시각디자인전공',
    '산업디자인전공',
    '패션디자인전공',
    '기악전공',
    '성악전공',
    '작곡전공',
    '체육전공',
    '태권도전공',
    '연기예술학과',
  ],
  반도체대학: [
    '전자공학전공',
    '반도체공학전공',
    '차세대반도체설계전공',
    '반도체디스플레이학과',
    '반도체설계학과',
  ],
}
