import { sendApprove } from '@/app/service/postRequests'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  let accessToken = getCookie(request, 'accessToken')
  try {
    const data = await sendApprove(accessToken)
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('승인정보 송신 중 오류발생')
  }
}
