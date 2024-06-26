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
 
  }
}

export const getMyExp = async (accessToken: string, page: string) => {
  const url = `${SERVER_URL}/api/experience-cards?page=${page}`
  return await getRequest(url, accessToken)
}

export const getMyExpDetail = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/experiences/${id}`
  return await getRequest(url, accessToken)
}

export const getMyCovlet = async (accessToken: string, page: string) => {
  const url = `${SERVER_URL}/api/coverLetters?page=${page}`
  return await getRequest(url, accessToken)
}

export const getMyCovletDetail = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/coverLetters/${id}`
  return await getRequest(url, accessToken)
}

export const getUserInfo = async (accessToken: string) => {
  const url = `${SERVER_URL}/api/mypage`
  return await getRequest(url, accessToken)
}

export const getUserPoint = async (accessToken: string, page: string) => {
  const url = `${SERVER_URL}/api/my-points/usage?page=${page}`
  return await getRequest(url, accessToken)
}

export const getSaving = async (accessToken: string, page: string) => {
  const url = `${SERVER_URL}/api/my-points/saving?page=${page}`
  return await getRequest(url, accessToken)
}

export const getUserPayment = async (accessToken: string, page: string) => {
  const url = `${SERVER_URL}/api/my-payments?page=${page}`
  return await getRequest(url, accessToken)
}

export const getMyBoard = async (accessToken: string, page?: number) => {
  const url = `${SERVER_URL}/api/my-boards?page=0`
  return await getRequest(url, accessToken)
}

export const getMyLike = async (accessToken: string, page?: number) => {
  const url = `${SERVER_URL}/api/my-likes?page=0`
  return await getRequest(url, accessToken)
}

export const getMyComment = async (accessToken: string, page?: number) => {
  const url = `${SERVER_URL}/api/my-comments?page=0`
  return await getRequest(url, accessToken)
}
