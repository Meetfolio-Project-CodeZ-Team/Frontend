import { getMyCovlet } from '@/app/service/getReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getMyCovlet(accessToken).then((data) => data)
  console.log(data, '자기소개서 목록 조회 요청이에요')

  return NextResponse.json(data)
}