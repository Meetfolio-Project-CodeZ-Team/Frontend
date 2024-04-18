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

export const logout = () => {
  document.cookie =
    'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
  window.location.href = '/main'
}
