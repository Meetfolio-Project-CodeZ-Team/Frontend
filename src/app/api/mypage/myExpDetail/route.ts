import { getMyExpDetail } from '@/app/service/getReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('experienceId') || ''
  let accessToken = getCookie(request, 'accessToken')
  const data = await getMyExpDetail(accessToken, id).then((data) => data)
  

  return NextResponse.json(data)
}
