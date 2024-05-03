import { getMyComment } from '@/app/service/getReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const data = await getMyComment(accessToken).then((data) => data)
  console.log(data, '게시글 목록 조회 요청이에요')

  return NextResponse.json(data)
}