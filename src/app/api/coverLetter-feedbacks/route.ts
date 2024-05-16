import { postAiFeedback } from '@/app/service/postReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const accessToken = getCookie(request, 'accessToken')
  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id') || ''

    console.log(id, 'url로 가져온 id')
    const data = await postAiFeedback(accessToken, id)

    return NextResponse.json(data)
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
