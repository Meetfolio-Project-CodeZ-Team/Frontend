import { postLike } from '@/app/service/postRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  try {
    const data = await postLike(accessToken, id)
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
