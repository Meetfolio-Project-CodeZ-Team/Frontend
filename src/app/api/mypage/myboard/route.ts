import { getMyBoard } from '@/app/service/getReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getMyBoard(accessToken).then((data) => data)
 

  return NextResponse.json(data)
}
