import { getTid } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getTid(accessToken).then((data) => data)

  console.log(data, 'tid 요청이에요')
  return NextResponse.json(data)
}
