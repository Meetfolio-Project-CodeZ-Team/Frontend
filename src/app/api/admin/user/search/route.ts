import { searchUser } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const keyword = searchParams.get('keyword') || ''

  let accessToken = getCookie(request, 'accessToken')
  const data = await searchUser(accessToken, keyword).then((data) => data)

  return NextResponse.json(data)
}
