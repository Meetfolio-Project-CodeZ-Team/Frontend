import { postSignUp } from '@/app/service/postRequests'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const content = await request.json()
  try {
    const data = await postSignUp(content)
    console.log(data, '회원가입 요청 데이터')
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
