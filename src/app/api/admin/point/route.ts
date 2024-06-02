import { getPoint } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const year = searchParams.get('year') || ''
  const month = searchParams.get('month') || ''

  const accessToken = getCookie(request, 'accessToken')
  const data = await getPoint(accessToken, year, month).then((data) => data)

  return NextResponse.json(data)
}
