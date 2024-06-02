import { getModelList } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page') || ''
  const accessToken = getCookie(request, 'accessToken')
  const data = await getModelList(accessToken, page)

  return NextResponse.json(data)
}
