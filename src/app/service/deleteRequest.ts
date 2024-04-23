const SERVER_URL = process.env.NEXT_PUBLIC_SERVER

const commonHeaders = {}

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
    })
    return response
  } catch (error) {
    console.log('Error:', error)
  }
}

export const deleteUser = async (accessToken: string, id: string) => {
  const url = `http://34.64.177.41:9090/api/admins/members-management/${id}`
  return await deleteRequest(url, accessToken)
}

export const logoutRequest = async (
  accessToken: string,
  refreshToken: string,
) => {
  const url = `http://34.64.177.41:9090/api/logout`
  return await deleteRequest(url, accessToken, refreshToken)
}
