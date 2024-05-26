import { deleteUser } from '@/app/service/deleteReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const refreshToken = getCookie(request, 'refreshToken')
  const data = await deleteUser(accessToken, refreshToken)

  return NextResponse.json(data)
}
