import { postAiAnalysis } from '@/app/service/postReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const accessToken = getCookie(request, 'accessToken')
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id') || ''

    const data = await postAiAnalysis(accessToken, id)

    return NextResponse.json(data)
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
