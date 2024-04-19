import { getPayment } from '@/app/service/getRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const year = searchParams.get('year') || ''
  const month = searchParams.get('month') || ''
  console.log(year, month, 'url로 가져온 연, 월')

  const accessToken = getCookie(request, 'accessToken')
  const data = await getPayment(accessToken, year, month).then((data) => data)

  return NextResponse.json(data)
}
