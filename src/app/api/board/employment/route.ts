import { getEmployment, getEmploymentAll } from '@/app/service/getRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  let accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') || ''
  const getData =()=>
    category !== ''
      ? getEmployment(accessToken, category).then((data) => data)
      : getEmploymentAll(accessToken).then((data) => data)

  const data = await getData()
    console.log(data, '서버에서 받아온 데이터');
    
  return NextResponse.json(data)
}
