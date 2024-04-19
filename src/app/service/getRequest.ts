const SERVER_URL = process.env.NEXT_PUBLIC_SERVER
const commonHeaders = {
  'Content-Type': 'application/json',
}
const getRequest = async (url: string, accessToken?: string) => {
  try {
    const headers = accessToken
      ? { ...commonHeaders, Authorization: 'Bearer ' + accessToken }
      : commonHeaders
    const response = await fetch(url, {
      headers: headers,
    }).then((res) => res.json())
    return response
  } catch (error) {
    console.log('Error:', error)
  }
}
export const getCardMain = async (accessToken: string) => {
  const url = `${SERVER_URL}/api`
  return await getRequest(url, accessToken)
}
export const getDashBoard = async (accessToken: string) => {
  const url = `${SERVER_URL}/api/admins/dashboard`
  return await getRequest(url, accessToken)
}