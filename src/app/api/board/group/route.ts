import { getGroup, getGroupAll } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') || ''
  const page = searchParams.get('page') || '0'
  const getData = () =>
    category !== ''
      ? getGroup(accessToken, category, page).then((data) => data)
      : getGroupAll(accessToken, page).then((data) => data)

  const data = await getData()

  return NextResponse.json(data)
}
