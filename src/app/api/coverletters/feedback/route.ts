import { postAiFeedback } from '@/app/service/postReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  
  console.log(id, 'url로 가져온 id')
  const data = await postAiFeedback(accessToken, id).then((data) => data)

  return NextResponse.json(data)
}
