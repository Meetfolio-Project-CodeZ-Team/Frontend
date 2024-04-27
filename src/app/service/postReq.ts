const SERVER_URL = process.env.NEXT_PUBLIC_SERVER
const commonHeaders = {
  'Content-Type': 'application/json',
}

const postRequest = async (url: string, body: any, accessToken?: string) => {
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

export const postExperience = async (
  experienceContent: ExperienceDataTypes,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/api/experiences`
  console.log(experienceContent, '로 요청')
  return await postRequest(url, experienceContent, accessToken)
}

export const postCoverLetter = async (
  coverletterContent: CoverLetterDataTypes,
  accessToken: string,
) => {
  const url = `${SERVER_URL}/api/coverLetters`
  console.log(coverletterContent, '로 요청')
  return await postRequest(url, coverletterContent, accessToken)
}
