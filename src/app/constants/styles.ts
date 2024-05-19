export const BUTTON_STYLE = {
  default: (className: string) => `${className}`,
  loginW: (className: string) =>
    `w-[500px] h-16 text-[26px] text-[#486283] bg-white font-semibold rounded-[30px] ${className}`,
  loginB: (className: string) =>
    `w-[500px] ${className} h-16 text-[26px] text-[#787878] bg-[#486283] font-semibold rounded-[30px]`,
  loginC: (className: string) =>
    `w-[700px] ${className} h-[55px] text-[22px] text-[#787878] bg-[#486283] font-semibold rounded-[20px]`,
  auth: (className: string) =>
    `w-[220px] h-[70px] text-[22px] text-white bg-[#486283] font-semibold rounded-[30px] ${className} `,
  complete: (className: string) =>
    `w-[330px] h-[70px] text-[28px] text-white bg-[#7AA9E7] font-semibold rounded-[30px] ${className} `,
  mainBtn: (className: string) =>
    `w-[480px] h-[56px] text-[28px] text-white text-2xl font-semibold  bg-[#1A202C] rounded-[20px] ${className} `,
  modelBtn: (className: string) =>
    `w-[120px] h-[48px] text-lg font-semibold bg-[#7AA9E7] rounded-[20px] ${className} `,
  addDataBtn: (className: string) =>
    `w-[820px] h-[54px] text-[20px] py-1.5 text-white font-semibold bg-[#1A202C] rounded-[10px] ${className} `,
  addBoardBtn: (className: string) =>
    `w-[80px] h-[40px] text-base py-1.5 text-white font-semibold bg-[#486283] rounded-[10px] ${className} `,
  authCode: (className: string) =>
    `w-[116px] h-14 text-base font-semibold rounded-[20px] ${className} `,
  editPost: (className: string) =>
    `w-20 h-[30px]text-sm font-bold bg-black text-white rounded-[25px] ${className} `,
  deletePost: (className: string) =>
    `w-20 h-[30px]text-sm font-bold bg-white text-black rounded-[25px] ${className} `,
  boardPost: (className: string) =>
    `w-[280px] h-[50px] text-[24px] font-semibold rounded-[20px] ${className} `,
  modelYes: (className: string) =>
    `w-[150px] h-[66px] text-2xl font-semibold rounded-[20px] ${className} bg-[#7AAAE8] text-white`,
  modelNo: (className: string) =>
    `w-[150px] h-[66px] text-2xl font-semibold rounded-[20px] ${className} bg-[#DEE5ED] text-black`,
  modelInfo: (className: string) =>
    `w-[207px] h-[66px] text-2xl font-semibold rounded-[20px] ${className}`,
  cancelEditBtn: (className: string) =>
    `w-[80px] h-[40px] text-base py-1.5 text-[#486283] font-semibold bg-[#white] rounded-[10px] ${className} border-2 border-[#486283]`,
} as const

export const INPUT_STYLE = {
  default: (className: string) => `${className}`,
  login: (className: string) =>
    `w-[500px] text-xl font-medium pl-7 h-16 bg-white rounded-[10px] border border-[#C4C4C4] ${className}`,
  auth: (className: string) =>
    `w-[200px] text-xl font-medium pl-7 h-18 bg-white rounded-[10px] focus:outline-none ${className}`,
  onboard: (className: string) =>
    `w-[700px] text-xl font-medium pl-10 h-[60px] bg-white rounded-[6px] border-[2px] border-[#C4C4C4] ${className}`,
  search: (className: string) =>
    `w-[280px] h-[32px] bg-white rounded-[10px] focus:outline-none ${className}`,
  exp1: (className: string) =>
    `w-[900px] text-xl font-medium pl-7 h-15 bg-white rounded-[10px] border border-[#C4C4C4] ${className}`,
  train: (className: string) =>
    `w-[400px] text-lg font-medium pl-5 h-[52px] bg-white rounded-[10px] border-2 border-[#C4C4C4] ${className}`,
  password: (className: string) =>
    `w-[300px] text-lg font-medium pl-6 h-[60px] bg-white rounded-[6px] border-[2px] border-[#C4C4C4] ${className}`,
  board: (className: string) =>
    `w-full text-[18px] font-medium pl-6 h-[52px] bg-white rounded-[6px] border-[2px] border-[#C4C4C4] ${className}`,
  member: (className: string) =>
    `w-[64px] text-[16px] text-[#1A202C] font-bold px-3 h-[52px] bg-white rounded-[10px] border-[2px] border-[#C4C4C4] ${className}`,
  charge: (className: string) =>
    `w-[400px] text-xl font-medium pl-6 h-[60px] bg-white rounded-[10px] border-2 border-[#C4C4C4] ${className}`,
} as const

export const DROPDOWN_STYLE = {
  default: (className: string) => `${className}`,
  user: (className: string) =>
    `w-[700px] text-xl font-medium pl-7 h-20 bg-white rounded-[10px] border border-[#C4C4C4] ${className}`,
}
