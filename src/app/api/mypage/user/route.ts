import { getUserInfo } from '@/app/service/getReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getUserInfo(accessToken).then((data) => data)
  console.log(data, '유저 정보 조회 요청이에요')
  return NextResponse.json(data)
}
