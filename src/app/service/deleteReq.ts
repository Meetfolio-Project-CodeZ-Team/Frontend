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
    console.log(response)

    return response
  } catch (error) {
    console.log('Error:', error)
  }
}

export const deleteExp = async (accessToken: string, id: string) => {
    const url = `${SERVER_URL}/api/experiences${id}`
    return await deleteExpRequest(url, accessToken)
}


const deleteExpRequest = async (
  url: string,
  accessToken?: string,
) => {
  try {
    const headers = accessToken
      ? {
          ...commonHeaders,
          Authorization: 'Bearer ' + accessToken,
        }
      : commonHeaders
      console.log(headers, '헤더스');
      
    const response = await fetch(url, {
      method: 'DELETE',
      headers: headers,
    }).then((res) => res.json())
    console.log(response)

    return response
  } catch (error) {
    console.log('Error:', error)
  }
}