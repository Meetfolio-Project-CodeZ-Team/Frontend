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

export const getMyExp = async (accessToken: string) => {
  const url = `http://34.64.177.41:9090/api/experience-cards`
  return await getRequest(url, accessToken)
}

export const getMyExpDetail = async (accessToken: string, id: string) => {
  const url = `http://34.64.177.41:9090/api/experiences/${id}`
  return await getRequest(url, accessToken)
}

export const getMyCovlet = async (accessToken: string) => {
  const url = `http://34.64.177.41:9090/api/coverLetters/{coverLetterId}`
  return await getRequest(url, accessToken)
}

export const getMyCovletDetail = async (accessToken: string, id: string) => {
  const url = `http://34.64.177.41:9090/api/coverLetters/${id}`
  return await getRequest(url, accessToken)
}
