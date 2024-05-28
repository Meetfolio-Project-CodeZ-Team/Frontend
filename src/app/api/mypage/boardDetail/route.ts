import { postBoardDetail } from '@/app/service/postReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  const data = await postBoardDetail(accessToken, id)

  return NextResponse.json(data)
}
