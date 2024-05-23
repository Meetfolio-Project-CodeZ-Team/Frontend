import { activeModel } from '@/app/service/postRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  const data = await activeModel(accessToken, id)
  console.log(data, '모델 버전 변경 넥스트 서버')
  return NextResponse.json(data)
}
