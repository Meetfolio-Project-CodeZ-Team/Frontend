import { postLogin } from '@/app/service/postRequests'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const content = await request.json()
  try {
    const data = await postLogin(content)
    console.log(data?.headers.get('authorization'), '넥스트 서버에서')
    const token = data?.headers.get('authorization') // 헤더에서 토큰 추출
    if (token) {
      return NextResponse.json({ token })
    } else {
      throw new Error('No token found in response')
    }
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
