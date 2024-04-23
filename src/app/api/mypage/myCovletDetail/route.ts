import { getMyCovletDetail } from '@/app/service/getReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('experienceId') || ''
  let accessToken = getCookie(request, 'accessToken')
  const data = await getMyCovletDetail(accessToken,id).then((data) => data)
  console.log(data, '자기소개서 세부 정보 조회 요청이에요')

  return NextResponse.json(data)
}
