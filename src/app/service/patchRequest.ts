const SERVER_URL = process.env.NEXT_PUBLIC_SERVER

const patchRequest = async (
  url: string,
  body: any = null,
  accessToken: string,
) => {
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      body: JSON.stringify(body),
    })
    if (response.ok) {
      return await response.json()
    }
  } catch (error) {
    console.log('Error:', error)
  }
}

export const updatePost = async (
  postContent: PatchBody,
  accessToken: string,
  id: string,
) => {
  const url = `${SERVER_URL}/api/boards/${id}`
  console.log(url, '요청경로')

  return await patchRequest(url, postContent, accessToken)
}

export const activeModel = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/admins/data-management/version/${id}`

  return await patchRequest(url, null, accessToken)
}

export const updateComment = async (
  accessToken: string,
  content: any,
  id: string,
) => {
  const url = `${SERVER_URL}/api/board-comments/${id}`

  return await patchRequest(url, content, accessToken)
}
