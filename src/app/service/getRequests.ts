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
    console.log(response, '서버에서 받아온 res')
    console.log(headers, '서버에 요청하는 헤더')

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

export const getUser = async (accessToken: string, jobKeyword?: string) => {
  jobKeyword
  const url = jobKeyword
    ? `${SERVER_URL}/api/admins/members-management?jobKeyword=${jobKeyword}`
    : `${SERVER_URL}/api/admins/members-management`
  return await getRequest(url, accessToken)
}

export const getPoint = async (
  accessToken: string,
  year: string,
  month: string,
) => {
  const url = `${SERVER_URL}/api/admins/point-management?year=${year}&month=${month}`
  return await getRequest(url, accessToken)
}

export const getPayment = async (
  accessToken: string,
  year: string,
  month: string,
) => {
  const url = `${SERVER_URL}/api/admins/payment-management?year=${year}&month=${month}`
  return await getRequest(url, accessToken)
}

export const getExpRequest = async (
  accessToken: string,
  year: string,
  month: string,
) => {
  const url = `${SERVER_URL}/api/admins/payment-management?year=${year}&month=${month}`
  return await getRequest(url, accessToken)
}
export const getModelData = async (accessToken: string) => {
  const url = `${SERVER_URL}/api/admins/model-management`
  return await getRequest(url, accessToken)
}

export const getTrainData = async (accessToken: string, page: string) => {
  const url =
    page !== ''
      ? `${SERVER_URL}/api/admins/data-management?page=${Number(page)-1}`
      : `${SERVER_URL}/api/admins/data-management`
  return await getRequest(url, accessToken)
}

export const getUserHeader = async (accessToken: string) => {
  const url = `${SERVER_URL}/api/members`
  return await getRequest(url, accessToken)
}

export const getPointInfo = async (accessToken: string) => {
  const url = `${SERVER_URL}/api/points`
  return await getRequest(url, accessToken)
}

export const getEmploymentAll = async (accessToken: string, page?: number) => {
  const url = `${SERVER_URL}/api/boards/employment?page=0`
  return await getRequest(url, accessToken)
}

export const getEmployment = async (
  accessToken: string,
  jobKeyword?: string,
  page?: number,
) => {
  const url = `${SERVER_URL}/api/boards/employment?page=0&category=${jobKeyword}`
  return await getRequest(url, accessToken)
}

export const getGroup = async (
  accessToken: string,
  jobKeyword?: string,
  page?: number,
) => {
  const url = `${SERVER_URL}/api/boards/group?page=0&category=${jobKeyword}`
  return await getRequest(url, accessToken)
}

export const getGroupAll = async (accessToken: string, page?: number) => {
  const url = `${SERVER_URL}/api/boards/group?page=0`
  return await getRequest(url, accessToken)
}

export const getTid = async (accessToken: string) => {
  const url = `${SERVER_URL}/api/payments/ready`
  return await getRequest(url, accessToken)
}

export const searchPost = async (
  accessToken: string,
  keyword: string,
  type: string,
) => {
  const url = `${SERVER_URL}/api/boards?page=0&keyword=${keyword}&type=${type}`
  return await getRequest(url, accessToken)
}

export const getBoard = async (accessToken: string, keyword: string) => {
  const url = keyword
    ? `${SERVER_URL}/api/admins/board-management?keyword=${keyword}`
    : `${SERVER_URL}/api/admins/board-management`
  return await getRequest(url, accessToken)
}
