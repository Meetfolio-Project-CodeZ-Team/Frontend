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
    
  }
}

export const postExperience = async (
  experienceContent: ExperienceDataTypes,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/api/experiences`
  return await postRequest(url, experienceContent, accessToken)
}

export const postCoverLetter = async (
  coverletterContent: CoverLetterDataTypes,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/api/coverLetters`
  return await postRequest(url, coverletterContent, accessToken)
}

export const postBoardDetail = async (accessToken: string, id: string) => {
  const url = `${SERVER_URL}/api/boards/${id}`
  return await postRequest(url, null, accessToken)
}

export const postAiFeedback = async (accessToken: string, id: string) => {
  const url = `${G_SERVER_URL}/api/coverLetter-feedbacks/${id}`
  return await postRequest(url, null, accessToken)
}

export const postCheckPw = async (accessToken: string, password: string) => {
  const url = `${SERVER_URL}/api/mypage/check-password`
  return await postRequest(url, password, accessToken)
}

export const postAiAnalysis = async (accessToken: string, id: string) => {
  const url = `${G_SERVER_URL}/api/coverLetter-analysis/${id}`
  return await postRequest(url, null, accessToken)
}
