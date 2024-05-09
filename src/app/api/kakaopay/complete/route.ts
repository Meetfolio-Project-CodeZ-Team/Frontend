import { successComplete } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  const pgToken = searchParams.get('pgToken') || ''
  const data = await successComplete(accessToken, Number(id), pgToken).then(
    (data) => data,
  )
  console.log(data, 'tid 요청이에요')
  return NextResponse.json(data)
}
