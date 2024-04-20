import { postExperience } from '@/app/service/postRequests'
import { NextResponse } from 'next/server'
import { getCookie } from '@/app/utils/cookies'

export async function POST(request: Request) {
  let accessToken = getCookie(request, 'accessToken')
  const content = await request.json()
  try {
    const data = await postExperience(content, accessToken)
    console.log(data, '경험분해 요청 데이터')
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
