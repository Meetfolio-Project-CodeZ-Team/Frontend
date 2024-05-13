import { getTrainData } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || ''
  const accessToken = getCookie(request, 'accessToken')
  const data = await getTrainData(accessToken, page).then((data) => data)

  return NextResponse.json(data)
}
