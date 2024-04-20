import { getModelData } from '@/app/service/getRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const data = await getModelData(accessToken).then((data) => data)

  return NextResponse.json(data)
}
