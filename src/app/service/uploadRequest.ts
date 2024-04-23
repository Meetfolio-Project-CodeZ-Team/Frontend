const SERVER_URL = process.env.NEXT_PUBLIC_SERVER

const postRequest = async (
  url: string,
  body: FormData,
  accessToken: string,
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + accessToken,
      },
      body: body,
    })
    console.log('실제 서버에 넣어 보내기 성공 res', response)
    return response
  } catch (error) {
    console.log('Error:', error)
  }
}

export const uploadPortfolio = async (
  portfolio: FormData,
  accessToken: string,
) => {
  const url = `http://34.64.177.41:9090/portfolio`
  return await postRequest(url, portfolio, accessToken)
}

export const uploadRecruit = async (
  portfolio: FormData,
  accessToken: string,
) => {
  const url = `http://34.64.177.41:9090/recruit`
  return await postRequest(url, portfolio, accessToken)
}
