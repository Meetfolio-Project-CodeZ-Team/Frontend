import { getDashBoard } from '@/app/service/getRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getDashBoard(accessToken).then((data) => data)
  console.log(data, '대쉬보드 요청이에요')

  return NextResponse.json(data)
}
