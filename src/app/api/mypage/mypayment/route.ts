import { getUserPayment } from '@/app/service/getReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '0'
  const data = await getUserPayment(accessToken, page).then((data) => data)
  console.log(data, '유저 정보 조회 요청이에요')
  return NextResponse.json(data)
}
