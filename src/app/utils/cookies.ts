import { parse } from 'cookie'

export const getCookie = (req: Request, name: string) => {
  try {
    const cookieHeader = req.headers.get('cookie')
    const cookies = parse(cookieHeader || '')
    return cookies[name]
  } catch (error) {
    throw error
  }
}

export const logout = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_NEXT_SERVER}/api/login/logout`,
    {
      method: 'DELETE',
    },
  )
  console.log('로그아웃 요청', res)
}
