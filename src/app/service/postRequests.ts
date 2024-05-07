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
    console.log(response, '요청 후 응답')

    return response.json()
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

export const postChargeKakao = async (
  point: chargePointTypes,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/api/payments/request`
  return await postRequest(url, point, accessToken)
}

export const postUsingPoint = async (
  point: usingPointTypes,
  id: string,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/api/coverLetters/${id}/points`
  console.log(id, '로 포인트', point, '사용')

  return await postRequest(url, point, accessToken)
}

export const postBoardDetail = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/boards/${id}`
  return await postRequest(url, null, accessToken)
}

export const postEmployment = async (
  accessToken: string,
  boardData: PostEmployment,
) => {
  const url = `${SERVER_URL}/api/boards/employment`
  return await postRequest(url, boardData, accessToken)
}

export const postGroup = async (
  accessToken: string,
  boardData: GroupEmployment,
) => {
  const url = `${SERVER_URL}/api/boards/group`
  return await postRequest(url, boardData, accessToken)
}
const SECRET_KEY = 'PRD15F9F429F55327310B427185189B9741AC192'

export const kakaoRequest = async (body: any) => {
  try {
    const response = await fetch(
      'https://open-api.kakaopay.com/online/v1/payment/ready',
      {
        method: 'POST',
        headers: {
          'Content-Type': `application/json`,
          Authorization: `DEV_SECRET_KEY ${SECRET_KEY}`,
        },
        body: JSON.stringify(body),
      },
    )

    return response.json()
  } catch (error) {
    console.log('Error:', error)
  }
}
