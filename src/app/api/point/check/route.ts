import { getPointInfo } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getPointInfo(accessToken).then((data) => data)
  console.log(data, '포인트 가져오기')

  return NextResponse.json(data)
}
