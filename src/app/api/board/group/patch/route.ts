import { updatePost } from '@/app/service/patchRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)

  const id = searchParams.get('id') || ''
  const reqdata = await request.json()

  const data = await updatePost(reqdata, accessToken, id)
  return NextResponse.json(data)
}
