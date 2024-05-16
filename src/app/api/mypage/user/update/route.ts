import { updateUser } from '@/app/service/updateReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)

  const id = searchParams.get('id') || ''
  console.log('넥스트 서버에서 가져온 id', id)

  const userData = await request.json()

  const data = await updateUser(userData, accessToken)
  return NextResponse.json(data)
}
