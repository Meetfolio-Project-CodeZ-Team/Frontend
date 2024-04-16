const SERVER_URL = process.env.NEXT_PUBLIC_SERVER
const commonHeaders = {
  'Content-Type': 'application/json',
}
interface authContent {
  email: string
  authCode: string
}
const postRequest = async (
  url: string,
  body: any = null,
  accessToken?: string,
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { ...commonHeaders, Authorization: 'Bearer ' + accessToken },
      body: JSON.stringify(body),
    }).then((res) => res.json())
    return response
  } catch (error) {
    console.log('Error:', error)
  }
}

export const postSignUp = async (email: string) => {
  const url = `${SERVER_URL}/api/signup/email`
  return await postRequest(url, email)
}

export const postAuthCode = async (authContent: authContent) => {
  const url = `${SERVER_URL}/api/signup/email/authentication`
  console.log(authContent, '로 요청')
  return await postRequest(url, authContent)
}
// export const postBookmarks = async (articleId: string, accessToken: string) => {
//   const url = `${SERVER_URL}/bookmarks/${articleId}`
//   return await postRequest(url, accessToken)
// }

// export const postRecruiter = async (articleId: string, accessToken: string) => {
//   const url = `${SERVER_URL}/recruitForms/${articleId}`
//   return await postRequest(url, accessToken)
// }
