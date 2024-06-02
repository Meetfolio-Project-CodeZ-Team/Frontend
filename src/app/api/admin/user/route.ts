import { getUser } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const jobKeyword = searchParams.get('jobKeyword') || ''
  const page = searchParams.get('page') || '0'

  let accessToken = getCookie(request, 'accessToken')
  const data = await getUser(accessToken, jobKeyword, page).then((data) => data)

  return NextResponse.json(data)
}
