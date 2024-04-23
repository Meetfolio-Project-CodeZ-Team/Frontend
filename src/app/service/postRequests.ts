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
    })
    console.log(response, '서버로부터 응답')
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

export const postLogin = async (LoginContent: loginContent) => {
  try {
    const url = `${SERVER_URL}/api/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: { ...commonHeaders },
      body: JSON.stringify(LoginContent),
    })
    return response
  } catch (error) {
    console.log('Error:', error)
  }
}

export const postExperience = async (
  experienceContent: ExperienceDataTypes,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/api/experiences`
  console.log(experienceContent, '로 요청')
  return await postRequest(url, experienceContent, accessToken)
}

export const postTrainData = async (
  accessToken: string,
  trainData: datasetInfoTypes,
) => {
  const url = `${SERVER_URL}/api/admins/data-management`
  console.log(trainData, '로 요청')
  return await postRequest(url, trainData, accessToken)
}
