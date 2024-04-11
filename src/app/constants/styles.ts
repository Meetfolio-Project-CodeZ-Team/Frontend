export const BUTTON_STYLE = {
  default: (className: string) => `${className}`,
  loginW: (className: string) =>
    `w-[700px] h-20 text-[26px] text-[#486283] bg-white font-semibold rounded-[30px] ${className}`,
  loginB: (className: string) =>
    `w-[700px] h-20 text-[26px] text-white bg-[#486283] font-semibold rounded-[30px] ${className} `,
  auth: (className: string) =>
    `w-[220px] h-[70px] text-[26px] text-[#486283] bg-[#CED7E4] font-semibold rounded-[30px] ${className} `,
  complete: (className: string) =>
    `w-[330px] h-[70px] text-[28px] text-white bg-[#7AA9E7] font-semibold rounded-[30px] ${className} `,
} as const

export const INPUT_STYLE = {
  default: (className: string) => `${className}`,
  login: (className: string) =>
    `w-[700px] text-xl font-medium pl-7 h-20 bg-white rounded-[10px] border border-[#C4C4C4] ${className}`,
  auth: (className: string) =>
    `w-[250px] text-xl font-medium pl-7 h-18 bg-white rounded-[10px] focus:outline-none ${className}`,
  onboard: (className: string) =>
    `w-[700px] text-xl font-medium pl-10 h-[60px] bg-white rounded-[10px] rounded-[6px] border-[2px] border-[#C4C4C4] ${className}`,
} as const
