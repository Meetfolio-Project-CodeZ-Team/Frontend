import { NextResponse } from 'next/server'
import { getCookie } from '@/app/utils/cookies'
import { postChargeKakao } from '@/app/service/postRequests'

export async function POST(request: Request) {
  let accessToken = getCookie(request, 'accessToken')
  const point = await request.json()
  try {
    const data = await postChargeKakao(point, accessToken)
    console.log(data, '포인트 요청 데이터')
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}