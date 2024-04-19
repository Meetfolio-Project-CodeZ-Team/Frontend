import { getUser } from '@/app/service/getRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getUser(accessToken).then((data) => data)
  console.log(data, '유저정보 요청이에요')

  return NextResponse.json(data)
}
