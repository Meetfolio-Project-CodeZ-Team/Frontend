import { getUser } from '@/app/service/getRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const jobKeyword = searchParams.get('jobKeyword') || '';
  console.log(jobKeyword);
  
  const page = searchParams.get('page') || '0';


  let accessToken = getCookie(request, 'accessToken')
  const data = await getUser(accessToken,jobKeyword ).then((data) => data)
  console.log(data, '유저정보 요청이에요')

  return NextResponse.json(data)
}
