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

export const updateExp = async (
  experienceContent: ExperienceDataTypes,
  accessToken: string,
  id: string,
) => {
  const url = `${SERVER_URL}/api/experiences/${id}`

  return await patchRequest(url, experienceContent, accessToken)
}

export const saveCov = async (
  coverLetterContent: CoverLetterDataTypes,
  accessToken: string,
  id: string,
) => {
  const url = `${SERVER_URL}/api/coverLetters/${id}`
  console.log(url, '요청경로')

  return await patchRequest(url, coverLetterContent, accessToken)
}

export const updateUser = async (
  userContent: UserInfoTypes,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/api/mypage`
  console.log(url, '요청경로')

  return await patchRequest(url, userContent, accessToken)
}

export const updateSatisfaction = async (
  Content: SatisfactionData,
  accessToken: string,
  id: string,
) => {
  const url = `${SERVER_URL}/api/coverLetters/satisfaction?feedbackId=${id}`
  console.log(url, '요청경로')

  return await patchRequest(url, Content, accessToken)
}

export const updateSatisfaction2 = async (
  Content: SatisfactionData,
  accessToken: string,
  id: string,
) => {
  const url = `${SERVER_URL}/api/coverLetters/satisfaction?analysisId=${id}`
  console.log(url, '요청경로')

  return await patchRequest(url, Content, accessToken)
}
