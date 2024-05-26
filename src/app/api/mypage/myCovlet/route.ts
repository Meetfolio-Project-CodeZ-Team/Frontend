import { getMyCovlet } from '@/app/service/getReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || '0'
  const data = await getMyCovlet(accessToken, page).then((data) => data)
  

  return NextResponse.json(data)
}
