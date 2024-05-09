import { getModelList } from '@/app/service/postRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const accessToken = getCookie(request, 'accessToken')
  const data = await getModelList(accessToken)

  return NextResponse.json(data)
}
