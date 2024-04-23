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
  document.cookie =
    'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  document.cookie =
    'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  window.location.href = '/main'
  console.log('로그아웃 요청', res)
}
