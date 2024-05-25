import { updateSatisfaction } from '@/app/service/updateReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)

  const id = searchParams.get('id') || ''
  

  const satisfactionData = await request.json()

  const data = await updateSatisfaction(satisfactionData, accessToken, id)
  return NextResponse.json(data)
}
