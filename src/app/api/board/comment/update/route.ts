import { updateComment } from '@/app/service/patchRequest'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request) {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id') || ''
  const content = await request.json()
  try {
    const data = await updateComment(accessToken, content, id)
    return NextResponse.json(data)
  } catch (error) {
    throw new Error('Error submitting recruiter data')
  }
}
