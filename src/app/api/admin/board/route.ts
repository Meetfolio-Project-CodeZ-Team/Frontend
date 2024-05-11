import { getBoard } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const keyword = searchParams.get('keyword') || ''
  const data = await getBoard(accessToken, keyword).then((data) => data)
  console.log(data, '대쉬보드 요청이에요')

  return NextResponse.json(data)
}
