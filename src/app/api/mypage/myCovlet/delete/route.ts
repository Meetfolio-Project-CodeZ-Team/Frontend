import { deleteCov } from '@/app/service/deleteReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)

  const coverLetterId = searchParams.get('coverLetterId') || ''

  try {
    const data = await deleteCov(accessToken, coverLetterId)
    
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    
    return new NextResponse(
      JSON.stringify({ error: 'Failed to delete the experience' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
