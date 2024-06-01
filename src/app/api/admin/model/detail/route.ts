import { postmodelDetail } from '@/app/service/postRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  const accessToken = getCookie(request, 'accessToken')
  const data = await postmodelDetail(accessToken, id).then((data) => data)

  return NextResponse.json(data)
}
