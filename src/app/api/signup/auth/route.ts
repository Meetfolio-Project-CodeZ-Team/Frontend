import { postAuthCode } from '@/app/service/postRequests'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const content = await request.json()
  try {
    const data = await postAuthCode(content)
    if (data && !data.ok) {
      throw new Error('Authentication failed')
    }
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
