import { searchPost } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const keyword = searchParams.get('keyword') || ''
  const type = searchParams.get('type') || ''

  const data = await searchPost(accessToken, keyword, type).then((data) => data)
  return NextResponse.json(data)
}
