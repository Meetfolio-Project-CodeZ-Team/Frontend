import { getPayment } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const year = searchParams.get('year') || ''
  const month = searchParams.get('month') || ''
  const page = searchParams.get('page') || ''

  const accessToken = getCookie(request, 'accessToken')
  const data = await getPayment(accessToken, year, month, page).then(
    (data) => data,
  )

  return NextResponse.json(data)
}
