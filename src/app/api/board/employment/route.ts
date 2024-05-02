import { getEmploymentAll } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getEmploymentAll(accessToken).then((data) => data)
  console.log(data, '게시물 취업정보')

  return NextResponse.json(data)
}
