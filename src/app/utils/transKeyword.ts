export const transKeyword = (keyword: string) => {
  switch (keyword) {
    case 'BACKEND':
      return '백엔드'
    case 'AI':
      return 'AI'
    case 'WEB':
      return '웹개발'
    case 'APP':
      return '앱개발'
    case 'DESIGN':
      return '디자인'
    default:
      return keyword
  }
}
