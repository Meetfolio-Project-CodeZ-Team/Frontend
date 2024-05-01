import { deleteUser } from '@/app/service/deleteReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const refreshToken = getCookie(request, 'refreshToken')
  const data = await deleteUser(accessToken, refreshToken)
  console.log('next서버 회원탈퇴 처리', data)

  return NextResponse.json(data)
}
