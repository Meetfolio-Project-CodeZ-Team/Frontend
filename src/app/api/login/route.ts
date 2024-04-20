import { postLogin } from '@/app/service/postRequests'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const content = await request.json()
  try {
    const data = await postLogin(content)
    console.log(data?.headers.get('authorization'), '넥스트 서버에서')
    console.log(data?.headers, '넥스트 서버에서')
    const access = data?.headers.get('authorization')
    const refresh = data?.headers.get('RefreshToken')
    if (access && refresh) {
      return NextResponse.json({ access, refresh })
    } else {
      throw new Error('No token found in response')
    }
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
