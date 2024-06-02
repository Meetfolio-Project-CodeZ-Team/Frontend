const SERVER_URL = process.env.NEXT_PUBLIC_SERVER

const commonHeaders = {
  'Content-Type': 'application/json',
}
const deleteRequest = async (
  url: string,
  accessToken?: string,
  refreshToken?: string,
) => {
  try {
    const headers = accessToken
      ? {
          ...commonHeaders,
          Authorization: 'Bearer ' + accessToken,
          RefreshToken: 'Bearer ' + refreshToken,
        }
      : commonHeaders
    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers,
    }).then((res) => res.json())

    return response
  } catch (error) {
    console.log('Error:', error)
  }
}

export const deleteExp = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/experiences/${id}`
  return await deleteRequest(url, accessToken)
}

export const deleteCov = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/coverLetters/${id}`
  return await deleteRequest(url, accessToken)
}

export const deleteUser = async (accessToken: string, refreshToken: string) => {
  const url = `${SERVER_URL}/api/withdrawl`
  return await deleteRequest(url, accessToken, refreshToken)
}
