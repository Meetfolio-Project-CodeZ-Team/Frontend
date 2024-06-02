const SERVER_URL = process.env.NEXT_PUBLIC_SERVER
const G_SERVER_URL = process.env.NEXT_PUBLIC_GAHCON_SERVER
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
  return await postRequest(url, experienceContent, accessToken)
}

export const postTrainData = async (
  accessToken: string,
  trainData: datasetInfoTypes,
) => {
  const url = `${SERVER_URL}/api/admins/data-management`
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
  return await postRequest(url, point, accessToken)
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

const SECRET_KEY = 'DEVA594C4619B9D06386280410A8D3B20FC08197'

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

export const postUserExpCard = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/members?memberName=${id}`
  return await postRequest(url, null, accessToken)
}

export const postUserCovelet = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/coverLetters/members?memberName=${id}`
  return await postRequest(url, null, accessToken)
}

export const postTid = async (data: any, accessToken: string) => {
  const url = `${SERVER_URL}/api/payments/ready `
  return await postRequest(url, data, accessToken)
}

export const kakaoApprove = async (body: any) => {
  try {
    const response = await fetch(
      'https://open-api.kakaopay.com/online/v1/payment/approve',
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

export const sendApprove = async (accessToken: string, data: any) => {
  const url = `${SERVER_URL}/api/payments/approve `
  return await postRequest(url, data, accessToken)
}

export const postAdditionalTrain = async (accessToken: string) => {
  const url = `${G_SERVER_URL}/api/admins/model-management/train`
  return await postRequest(url, null, accessToken)
}

export const postLike = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/board-likes/${id}`
  return await postRequest(url, null, accessToken)
}

export const postComment = async (
  accessToken: string,
  data: any,
  id: string,
) => {
  const url = `${SERVER_URL}/api/board-comments/${id}`
  return await postRequest(url, data, accessToken)
}

export const activeModel = async (accessToken: string, id: string) => {
  const url = `${G_SERVER_URL}/api/admins/model-management/version/${id}`
  return await postRequest(url, null, accessToken)
}
