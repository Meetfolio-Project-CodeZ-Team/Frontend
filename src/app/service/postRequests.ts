const SERVER_URL = process.env.NEXT_PUBLIC_SERVER
const commonHeaders = {
  'Content-Type': 'application/json',
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

export const postEmail = async (email: string) => {
  const url = `${SERVER_URL}/api/signup/email`
  return await postRequest(url, email)
}

export const postAuthCode = async (authContent: authContent) => {
  const url = `${SERVER_URL}/api/signup/email/authentication`
  return await postRequest(url, authContent)
}

export const postSignUp = async (signUpContent: signupTypes) => {
  const url = `${SERVER_URL}/api/signup`
  console.log(signUpContent, '로 요청')
  return await postRequest(url, signUpContent)
}
