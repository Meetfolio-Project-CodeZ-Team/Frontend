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
  const url = `${SERVER_URL}/api/admins/members-management/${id}`
  return await deleteRequest(url, accessToken)
}

export const logoutRequest = async (
  accessToken: string,
  refreshToken: string,
) => {
  const url = `${SERVER_URL}/api/logout`
  return await deleteRequest(url, accessToken, refreshToken)
}

export const deletePost = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/boards/${id}`
  return await deleteRequest(url, accessToken)
}

export const deletePostAdmin = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/admins/board-management/${id}`
  return await deleteRequest(url, accessToken)
}

export const deleteModel = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/admins/data-management/version/${id}`
  return await deleteRequest(url, accessToken)
}

export const deleteComment = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/board-comments/${id}`
  return await deleteRequest(url, accessToken)
}
