import { deleteUser } from '@/app/service/deleteRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)

  const userId = searchParams.get('userId') || ''
  
  const data = await deleteUser(accessToken, userId)
  return NextResponse.json(data)
}
