import { postTid } from '@/app/service/postRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let accessToken = getCookie(request, 'accessToken')
  const content = await request.json()
  try {
    const data = await postTid(content, accessToken)
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('카카오페이 연결 중 오류발생')
  }
}
