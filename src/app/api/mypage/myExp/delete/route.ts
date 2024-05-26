import { deleteExp } from '@/app/service/deleteReq'
import { getCookie } from '@/app/utils/cookies'
import { NextResponse } from 'next/server'

export async function DELETE(request: Request): Promise<NextResponse> {
  const accessToken = getCookie(request, 'accessToken')
  const { searchParams } = new URL(request.url)

  const experienceId = searchParams.get('experienceId') || ''
  

  try {
    const data = await deleteExp(accessToken, experienceId)
    // 데이터 삭제에 따른 응답, 아마도 성공적으로 삭제되면 내용이 없는 응답이 더 적합할 수 있습니다.
    return new NextResponse(null, { status: 204 })
  } catch (error) {
    // 서버 측 오류 처리
    return new NextResponse(
      JSON.stringify({ error: 'Failed to delete the experience' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      },
    )
  }
}
