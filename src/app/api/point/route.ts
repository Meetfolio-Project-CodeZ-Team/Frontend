import { postUsingPoint } from '@/app/service/postRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const point = await request.json()
  const id = searchParams.get('id') || ''

  const data = await postUsingPoint(point, id, accessToken)
  return NextResponse.json(data)
}
