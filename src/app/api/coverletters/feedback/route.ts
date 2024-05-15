import { postAiFeedback } from '@/app/service/postReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request){
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  const data = await postAiFeedback(accessToken, id)

  console.log(data, accessToken, id, '디테일 요청')

  return NextResponse.json(data)
}
