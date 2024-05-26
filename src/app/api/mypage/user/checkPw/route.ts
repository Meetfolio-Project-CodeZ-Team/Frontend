import { postCheckPw } from '@/app/service/postReq'
import { NextResponse } from 'next/server'
import { getCookie } from '@/app/utils/cookies'

export async function POST(request: Request) {
  let accessToken = getCookie(request, 'accessToken')
  const password = await request.json()
  try {
    const data = await postCheckPw(accessToken, password)
    
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
