import { logoutRequest } from '@/app/service/deleteRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const data = await logoutRequest(accessToken)
  console.log('next서버 로그아웃 처리', data)

  return NextResponse.json(data)
}
