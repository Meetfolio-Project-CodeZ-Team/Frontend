import { getMyExp } from '@/app/service/getReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getMyExp(accessToken).then((data) => data)
  console.log(data, '경험분해 목록 조회 요청이에요')

  return NextResponse.json(data)
}
