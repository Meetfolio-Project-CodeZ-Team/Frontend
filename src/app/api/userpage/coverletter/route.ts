import { postUserCovelet } from '@/app/service/postRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  const data = await postUserCovelet(accessToken, id)

  return NextResponse.json(data)
}
