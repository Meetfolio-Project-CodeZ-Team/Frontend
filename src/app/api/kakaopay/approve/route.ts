import { kakaoApprove } from '@/app/service/postRequests'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const content = await request.json()
  try {
    const data = await kakaoApprove(content)
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('카카오페이 연결 중 오류발생')
  }
}
